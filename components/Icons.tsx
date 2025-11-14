
import React from 'react';

export const IconProps = {
  className: "h-6 w-6",
};

export const FoxIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.667 6.243c.27-.134.56-.21.853-.243a3.5 3.5 0 0 1 3.5 3.5c0 .293-.076.58-.21.853"/>
    <path d="M13.5 13.75c-.27.134-.56.21-.853.243a3.5 3.5 0 0 1-3.5-3.5c0-.293.076-.58.21-.853"/>
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/>
    <path d="M12 21v-3.5a3.5 3.5 0 0 0-3.5-3.5H6a3.5 3.5 0 0 1-3.5-3.5V6"/>
    <path d="M12 21v-3.5a3.5 3.5 0 0 1 3.5-3.5H18a3.5 3.5 0 0 0 3.5-3.5V6"/>
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5z"/>
    <path d="M20 3v4M4 3v4"/>
  </svg>
);

export const PenIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    </svg>
);

export const PaletteIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a7 7 0 1 0 10 10"/>
    </svg>
);

export const MegaphoneIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z"/>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
);

export const RocketIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.5-3.5-.18-.98-.5-2.03-.9-3.1-.4-1.07-.9-2.24-1.5-3.5A6.25 6.25 0 0 0 3 9.75c-.24 1.28-.43 2.75-.43 4.25Z"/>
        <path d="M19.5 16.5c1.5 1.26 2 5 2 5s-3.74-.5-5-2c-.71-.84-.7-2.3-.5-3.5.18-.98.5-2.03.9-3.1.4-1.07.9-2.24 1.5-3.5A6.25 6.25 0 0 1 21 9.75c.24 1.28.43 2.75.43 4.25Z"/>
        <path d="M12 11.5V22"/>
        <path d="m7 18 5-6 5 6"/>
        <path d="M12 2v2.5"/>
    </svg>
);

export const HeartIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4 text-brand-pink" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
);

export const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
);

export const ImageIcon: React.FC<{ className?: string }> = ({ className = IconProps.className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
);
