import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  color?: string;
  isCurrency?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, color, isCurrency }) => {
  const isNegative = typeof value === 'number' && value < 0;
  
  return (
    <div className="stat-card">
      <h3>{label}</h3>
      <div 
        className={`value ${isCurrency ? (isNegative ? 'negative' : 'positive') : ''}`}
        style={!isCurrency && color ? { color } : {}}
      >
        {isCurrency && (typeof value === 'number' && value >= 0 ? '£' : '-£')}
        {isCurrency && typeof value === 'number' ? Math.abs(value).toFixed(2) : value}
      </div>
    </div>
  );
};
