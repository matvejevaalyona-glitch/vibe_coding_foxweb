
import React from 'react';
import type { ColorInfo } from '../types';

interface ColorPaletteProps {
  palette: ColorInfo[];
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ palette }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {palette.map((color) => (
        <div key={color.hex} className="flex items-start space-x-4">
          <div
            className="w-16 h-16 rounded-lg shadow-inner flex-shrink-0 border border-black/10"
            style={{ backgroundColor: color.hex }}
          />
          <div>
            <h4 className="font-bold text-brand-brown">{color.name}</h4>
            <p className="text-sm font-mono text-brand-brown/70">{color.hex}</p>
            <p className="text-sm text-brand-brown/80 mt-1">{color.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
