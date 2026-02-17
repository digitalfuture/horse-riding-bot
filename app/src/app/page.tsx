"use client";

import { useEffect, useState } from "react";
import { Bet } from "@/lib/botService";
import { StatCard } from "@/components/StatCard";
import { BetRow } from "@/components/BetRow";

interface BotState {
  balance: number;
  history: Bet[];
  isRunning: boolean;
  stats: {
    totalBets: number;
    wins: number;
    winRate: string;
  };
}

export default function Dashboard() {
  const [state, setState] = useState<BotState | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/bot");
      const data = await res.json();
      setState(data);
    } catch (error) {
      console.error("Failed to fetch bot state:", error);
    }
  };

  const toggleBot = async () => {
    if (!state) return;
    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: state.isRunning ? "stop" : "start" }),
      });
      const data = await res.json();
      setState(data);
    } catch (error) {
      console.error("Failed to toggle bot:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!state) return <div className="loading">Loading Bot Stats...</div>;

  return (
    <main className="dashboard">
      <header>
        <h1>Pretty Name Bot 🐎</h1>
        <button 
          onClick={toggleBot}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            background: state.isRunning ? '#ef4444' : '#10b981',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {state.isRunning ? "STOP BOT" : "START BOT"}
        </button>
      </header>

      <div className="bot-status">
        <div className="status-indicator">
          <div className={`dot ${state.isRunning ? "active" : "inactive"}`} style={{
            background: state.isRunning ? '#10b981' : '#6b7280',
            boxShadow: state.isRunning ? '0 0 10px #10b981' : 'none',
            width: 12, height: 12, borderRadius: '50%'
          }} />
          <span>System Status: {state.isRunning ? "Running Analytics & Betting" : "Idle"}</span>
        </div>
        <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
          Server Time: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="stats-grid">
        <StatCard label="Total Balance" value={state.balance} isCurrency />
        <StatCard label="Win Rate" value={`${state.stats.winRate}%`} color="#8b5cf6" />
        <StatCard label="Total Bets" value={state.stats.totalBets} color="#f59e0b" />
        <StatCard label="Strategy" value="Beauty ≥ 8" color="#f1f5f9" />
      </div>

      <section className="table-container">
        <h2>Live Betting History</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Horse Name</th>
              <th>Diamonds</th>
              <th>Odds</th>
              <th>Status</th>
              <th>P&L</th>
            </tr>
          </thead>
          <tbody>
            {state.history.map((bet) => (
              <BetRow key={bet.id} bet={bet} />
            ))}
            {state.history.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No betting activity yet. Start the bot to begin.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
