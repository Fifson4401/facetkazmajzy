import { structuredDataAttributes } from '@/api/interfaces/seo';
import Script from 'next/script';
import { FC } from 'react';

interface CustomJsonProps {
  data: structuredDataAttributes;
}

export const CustomJson: FC<CustomJsonProps> = ({ data }) => {
  if (!data) return null;

  const dataArray = Array.isArray(data) ? data : [data];

  return (
    <>
      {dataArray.map((item, index) => {
        const idLabel = `structured-data_${item['@type'] ?? ''}_${item.name ?? ''}_${index}`;

        return (
          <Script
            id={idLabel}
            key={`${idLabel}_${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            defer={true}
          >
            {`${JSON.stringify(item)}`}
          </Script>
        );
      })}
    </>
  );
};
