import React from 'react';

interface WiggleDividerProps {
  color?: string;
  fill?: string;
  className?: string;
  flip?: boolean;
}

export default function WiggleDivider({
  color = '#BF3A3A',
  fill = '#FCFAF6',
  className = '',
  flip = false,
}: WiggleDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        className="w-full h-4 sm:h-6 md:h-8 block"
        style={{ color: fill }}
      >
        <path
          d="M0,0 C150,30 350,-15 500,16 C650,47 850,-10 1000,18 C1100,32 1180,10 1200,0 L1200,32 L0,32 Z"
          fill="currentColor"
        />
        <path
          d="M0,0 C150,30 350,-15 500,16 C650,47 850,-10 1000,18 C1100,32 1180,10 1200,0"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}

