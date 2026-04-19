import React from 'react';
import './Badge.css';

export interface BadgeProps {
  label: string;
  status?: 'success' | 'warning' | 'info' | 'error' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  status = 'neutral',
  icon,
  className = ''
}) => {
  return (
    <div className={`badge badge-${status} ${className}`}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-label">{label}</span>
    </div>
  );
};
