/* eslint-disable */
import { FC, PropsWithChildren } from 'react'
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import { MenuArray } from '@/api/interfaces/defaults';

export type LayoutProps = PropsWithChildren<object> & {
  menu: MenuArray
  lang?: string;
};

export const Layout: FC<LayoutProps> = ({ children, lang = 'pl', menu }) => (
  <>
    <Header menu={menu} />
    <ProgressBar />
    <main lang={lang} className="flex min-h-screen flex-col items-center xl:px-28 md:px-14 md:py-8 light text-foreground bg-background p-8 overflow-hidden gap-6 md:gap-10">
      {children}
    </main>
  </>
)
