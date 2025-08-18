'use client';

import { FC } from 'react';
import { Image } from '@heroui/image';
import DoodleContainer from '@/components/ui/Doodle/DoodleContainer';
import Text from '@/components/ui/Text';
import TapeButton from '@/components/ui/Button/TapeButton';
import { doodles } from './Doodles';

export const NotFound: FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <DoodleContainer doodles={doodles}>
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-5 p-4">
            <Image
              src="/404.webp"
              alt="404"
              width={500}
              height={300}
              className="max-w-full h-auto"
            />
            <Text as="h1" size="xl" className="text-center font-bold">
              Nie znaleziono strony
            </Text>
            <Text size="lg" className="text-center">
              Strona, której szukasz nie istnieje lub została przeniesiona.
            </Text>
            <TapeButton href="/" variant="large">
              Wróć na stronę główną
            </TapeButton>
          </div>
        </div>
      </DoodleContainer>
    </div>
  );
};
