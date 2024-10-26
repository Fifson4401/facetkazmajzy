/* eslint-disable */
import { FC, PropsWithChildren, Suspense } from 'react';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import { MenuArray } from '@/api/interfaces/defaults';
import Footer from '../Footer/Footer';

export type LayoutProps = PropsWithChildren<object> & {
  menu: MenuArray;
  lang?: string;
};

export const Layout: FC<LayoutProps> = ({ children, lang = 'pl', menu }) => (
  <Suspense
    fallback={
      <div className="flex min-h-screen flex-col justify-between">
        <main
          lang={lang}
          className="flex flex-grow flex-col items-center gap-6 overflow-hidden bg-background p-8 text-foreground light md:gap-10 md:px-14 md:py-8 xl:px-28"
        >
          <p>Ładuje ;]</p>
        </main>
      </div>
    }
  >
    <div className="flex min-h-screen flex-col justify-between">
      <Header menu={menu} />
      <ProgressBar />
      <main
        lang={lang}
        className="flex flex-grow flex-col items-center gap-6 overflow-hidden bg-background p-8 text-foreground light md:gap-10 md:px-14 md:py-8 xl:px-28"
      >
        {children}
      </main>
      <Footer />
    </div>
  </Suspense>
);
