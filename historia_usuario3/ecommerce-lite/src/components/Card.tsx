import React from 'react';
import './Card.css';
import { Badge } from './Badge';

export interface CardProps {
  title: string;
  type: 'green' | 'white' | 'black';
  imageUrl?: string;
  footer?: React.ReactNode;
  badge: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  type,
  imageUrl,
  footer,
  badge,
  children,
  className = ''
}) => {
  return (
    <div className={`card card-${type} ${className}`}>
      {imageUrl && (
        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
      )}
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="card-badge">{badge}</div>
        </div>
        <div className="card-body">{children}</div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </div>
  );
};
