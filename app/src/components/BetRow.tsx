import React from 'react';
import { Bet } from '@/lib/botService';

interface BetRowProps {
  bet: Bet;
}

export const BetRow: React.FC<BetRowProps> = ({ bet }) => {
  return (
    <tr>
      <td style={{ color: '#94a3b8' }}>
        {new Date(bet.date).toLocaleTimeString()}
      </td>
      <td style={{ fontWeight: 600 }}>{bet.horse}</td>
      <td>
        <span style={{ color: '#f59e0b' }}>
          {"★".repeat(bet.beauty_score)}
          <span style={{ opacity: 0.2 }}>{"★".repeat(10 - bet.beauty_score)}</span>
        </span>
      </td>
      <td style={{ fontFamily: 'JetBrains Mono' }}>{bet.odds}</td>
      <td>
        <span className={`badge ${bet.status}`}>
          {bet.status.toUpperCase()}
        </span>
      </td>
      <td className={`pnl ${bet.profit >= 0 ? "positive" : "negative"}`} style={{
        fontFamily: 'JetBrains Mono',
        fontWeight: 'bold',
        color: bet.profit >= 0 ? '#10b981' : '#ef4444'
      }}>
        {bet.profit >= 0 ? "+" : ""}{bet.profit.toFixed(2)}
      </td>
    </tr>
  );
};
