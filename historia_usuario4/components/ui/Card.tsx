import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, description }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="px-6 py-8">
        {(title || description) && (
          <div className="mb-6 text-center">
            {title && <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>}
            {description && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
