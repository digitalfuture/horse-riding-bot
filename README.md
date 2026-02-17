# Horse Riding Bot 🐎

Automated betting system for UK & Ireland horse racing based on artistic name analysis.

## 📊 Project Overview
This project explores the correlation between "beautiful" horse names and their performance on the track. Our strategy focuses on horses with a **Beauty Score of 8 or higher**.

### 🧪 Backtest Results
- **Period:** Jan 2025 - Feb 2026
- **Strategy:** Bet £10 on the prettiest name in each race.
- **ROI:** 71.5%
- **Net Profit:** +£250.08

## 🛠 Project Structure
- `/app`: Next.js 16 Web Dashboard (Real-time analytics & Bot Control)
- `/data`: CSV datasets and backtest results
- `index.html`: Legacy static dashboard

## 🚀 Getting Started

### Next.js Dashboard
1. Navigate to the app directory:
   ```bash
   cd app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

### Legacy Statistics
Open `index.html` directly in your browser to view the historical backtest data.

## 💎 Strategy Insight
Our analysis shows that while extremely "pretty" names (Score 9-10) are often overhyped by the market, names with a Score of **8** represent a consistent "sweet spot" for profitability.
