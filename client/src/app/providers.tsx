import ResponsiveProvider from '@/contexts/ResponsiveContext';
import { HeroUIProvider } from '@heroui/system';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ResponsiveProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ResponsiveProvider>
  );
}
