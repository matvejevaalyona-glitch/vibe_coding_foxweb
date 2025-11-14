
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg" role="alert">
      <p className="font-bold">Oh no, a tangle!</p>
      <p>Something went wrong while generating the content. Please check the console for details or try refreshing the page.</p>
      <p className="text-sm mt-2 font-mono bg-red-200 p-2 rounded">{message}</p>
    </div>
  );
};
