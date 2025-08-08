"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';

type Breakpoint = 'mobile' | 'desktop';

type ResponsiveProviderProps = {
  children: React.ReactNode;
};

const ResponsiveContext = createContext<Breakpoint | null>(null);

const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    
    const handleResize = () => {
      setBreakpoint(mediaQueryList.matches ? 'desktop' : 'mobile');
    };
    
    handleResize();
    mediaQueryList.addEventListener('change', handleResize);
    
    return () => mediaQueryList.removeEventListener('change', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={breakpoint}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = (): Breakpoint => {
  const context = useContext(ResponsiveContext);
  if (context === null) {
    throw new Error('useResponsive musi być używany wewnątrz ResponsiveProvider');
  }
  return context;
};

export default ResponsiveProvider;