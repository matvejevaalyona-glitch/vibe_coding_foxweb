
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-brand-orange/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-xl font-bold font-display text-brand-teal">{title}</h3>
      </div>
      <div className="text-brand-brown/90 leading-relaxed">{children}</div>
    </div>
  );
};
