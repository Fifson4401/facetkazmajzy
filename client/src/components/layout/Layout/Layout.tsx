import { FC, PropsWithChildren, Suspense } from 'react';
import ProgressBar from '../../../core/components/ProgressBar/ProgressBar';

export type LayoutProps = PropsWithChildren<object>;

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Suspense
    fallback={
      <div className="flex h-screen w-full items-center justify-center">
        <p>Ładuje ;]</p>
      </div>
    }
  >
    <div className="flex min-h-screen flex-col">
      <ProgressBar />
      
      <div className="flex-grow p-8 md:p-12 
        pr-paper-margin 
        sm:pr-paper-margin-sm 
        md:pr-paper-margin-md 
        lg:pr-paper-margin-lg 
        2xl:pr-paper-margin-2xl"
      >
        {children}
      </div>
    </div>
  </Suspense>
);