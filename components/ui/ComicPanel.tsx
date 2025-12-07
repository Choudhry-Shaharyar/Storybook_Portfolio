import React from 'react';

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'dark' | 'accent';
  noShadow?: boolean;
}

const ComicPanel: React.FC<ComicPanelProps> = ({
  children,
  className = '',
  variant = 'white',
  noShadow = false
}) => {
  const bgColors = {
    white: 'bg-white text-black',
    dark: 'bg-zinc-900 text-white',
    accent: 'bg-green-600 text-white',
  };

  const shadowClass = noShadow ? '' : 'comic-shadow';

  return (
    <div className={`border-2 border-black ${bgColors[variant]} ${shadowClass} p-6 relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default ComicPanel;