/* eslint-disable */
import { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import { MenuArray } from '@/api/interfaces/defaults';
import Footer from '../Footer/Footer';

export type LayoutProps = PropsWithChildren<object> & {
  menu: MenuArray;
  lang?: string;
};

export const Layout: FC<LayoutProps> = ({ children, lang = 'pl', menu }) => (
  <>
    <Header menu={menu} />
    <ProgressBar />
    <main
      lang={lang}
      className="flex min-h-screen flex-col items-center gap-6 overflow-hidden bg-background p-8 text-foreground light md:gap-10 md:px-14 md:py-8 xl:px-28"
    >
      {children}
    </main>
    <Footer />
  </>
);
