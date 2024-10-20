import { FC } from 'react'

import { SEO } from '@/api/interfaces/seo'
import { CustomJson } from './CustomJson'
import Script from 'next/script'

interface SeoProps {
  seo?: SEO
}

export const Seo: FC<SeoProps> = ({ seo }) => {

  if (!seo) {
    return null
  }

  return (
    <>
      <Script id="gtag-base" strategy="beforeInteractive" defer={true} src='https://www.googletagmanager.com/gtag/js?id=G-ZGT0KL8BXX' />
      <Script id="gtag-base2" strategy="beforeInteractive" >
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZGT0KL8BXX');`}
      </Script>
      <CustomJson data={seo.structuredData} />
    </>
  )
}
