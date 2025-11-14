
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center gap-3 mb-6">
        {icon && <span className="text-brand-teal">{icon}</span>}
        <h2 className="text-3xl font-bold font-display text-brand-brown">{title}</h2>
      </div>
      <div className="bg-white/50 p-6 md:p-8 rounded-2xl shadow-sm border border-black/5">
        {children}
      </div>
    </section>
  );
};
