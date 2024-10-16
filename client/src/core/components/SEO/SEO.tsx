import { FC } from 'react'

import { SEO } from '@/api/interfaces/seo'
import { CustomJson } from './CustomJson'

interface SeoProps {
  seo?: SEO
}

export const Seo: FC<SeoProps> = ({ seo }) => {

  if (!seo) {
    return null
  }

  return (
    <>
      <CustomJson data={seo.structuredData} />
    </>
  )
}
