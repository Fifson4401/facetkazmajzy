import { FC } from 'react';

export const ScribblesContainer: FC = () => {
  return (
    // ZMIANA: Usunięto klasy "hidden" i "md:block".
    // Kontener jest teraz zawsze widoczny, a jego szerokość (`w-paper-margin`)
    // jest już responsywna dzięki konfiguracji w pliku tailwind.config.ts.
    <aside className="pointer-events-none absolute top-0 right-0 h-full w-paper-margin">
      {/* Bazgroły wewnątrz są pozycjonowane i skalowane procentowo,
        więc automatycznie dopasują się do mniejszego kontenera na mobilkach.
      */}
      
    </aside>
  );
};
