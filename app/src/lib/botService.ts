import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface Horse {
  number: string;
  name: string;
  type: string;
  notes: string;
  beauty_score: number;
}

export interface Bet {
  id: string;
  date: string;
  horse: string;
  beauty_score: number;
  odds: string;
  status: 'pending' | 'win' | 'loss';
  profit: number;
}

class BotService {
  private horses: Horse[] = [];
  private history: Bet[] = [];
  private balance: number = 0;
  private isRunning: boolean = false;
  private timer: NodeJS.Timeout | null = null;

  constructor() {
    this.loadData();
    // Pre-populate with some historical data if needed
  }

  private loadData() {
    try {
      const csvPath = path.resolve(process.cwd(), '../data/horses.csv');
      if (fs.existsSync(csvPath)) {
        const content = fs.readFileSync(csvPath, 'utf8');
        this.horses = parse(content, {
          columns: true,
          skip_empty_lines: true,
          cast: true
        });
      }
    } catch (error) {
      console.error('Failed to load horses:', error);
    }
  }

  public start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.processTick();
  }

  public stop() {
    this.isRunning = false;
    if (this.timer) clearTimeout(this.timer);
  }

  private processTick() {
    if (!this.isRunning) return;

    // Simulate "placing a bet" every 10-20 seconds
    const interval = 10000 + Math.random() * 10000;
    
    this.timer = setTimeout(() => {
      this.placeSimulatedBet();
      this.processTick();
    }, interval);
  }

  private placeSimulatedBet() {
    if (this.horses.length === 0) return;

    // Pick a random horse with beauty score >= 8 (our strategy)
    const candidates = this.horses.filter(h => h.beauty_score >= 8);
    const horse = candidates[Math.floor(Math.random() * candidates.length)];
    
    if (!horse) return;

    const bet: Bet = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      horse: horse.name,
      beauty_score: horse.beauty_score,
      odds: (1.5 + Math.random() * 5).toFixed(2),
      status: 'pending',
      profit: 0
    };

    this.history.unshift(bet);
    if (this.history.length > 50) this.history.pop();

    // Simulate outcome after 5 seconds
    setTimeout(() => {
      this.resolveBet(bet.id);
    }, 5000);
  }

  private resolveBet(id: string) {
    const bet = this.history.find(b => b.id === id);
    if (!bet) return;

    // Strategy rule: higher win rate for beauty score 8
    const winChance = bet.beauty_score === 8 ? 0.7 : 0.4;
    const won = Math.random() < winChance;

    if (won) {
      bet.status = 'win';
      bet.profit = 10 * (parseFloat(bet.odds) - 1);
      this.balance += bet.profit;
    } else {
      bet.status = 'loss';
      bet.profit = -10;
      this.balance += bet.profit;
    }
  }

  public getState() {
    return {
      balance: this.balance,
      history: this.history,
      isRunning: this.isRunning,
      stats: {
        totalBets: this.history.length,
        wins: this.history.filter(b => b.status === 'win').length,
        winRate: (this.history.filter(b => b.status === 'win').length / (this.history.length || 1) * 100).toFixed(1)
      }
    };
  }
}

// Singleton pattern for the service
export const botService = new BotService();
