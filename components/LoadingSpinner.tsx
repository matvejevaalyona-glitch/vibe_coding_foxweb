
import React from 'react';
import { FoxIcon } from './Icons';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 text-brand-brown/80">
      <FoxIcon className="h-16 w-16 text-brand-orange animate-bounce" />
      <p className="mt-4 text-xl font-display font-bold">Brewing up a quirky brand...</p>
      <p className="text-sm">Our little fox is thinking very hard (you might hear a "moo").</p>
    </div>
  );
};
