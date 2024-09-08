'use client'

import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import { FC } from 'react'

import { ImageInstance } from '@/core/models/ImageInstance'

import { ImageHandlerProps } from './ImageHandler.types'
import { PropsWithClassName } from '@/api/interfaces/defaults'
import { useDevicePixelRatio } from "@/core/hooks/devicePixelRatio/hooks";

export const ImageHandlerPopulate = {
  populate: {
    url: { populate: '*' },
    alternativeText: { populate: '*' },
    caption: { populate: '*' },
    width: { populate: '*' },
    height: { populate: '*' }
  }
}

export const ImageHandler: FC<PropsWithClassName<ImageHandlerProps>> = ({
  image,
  wrapperClassName = '',
  imageClassName = "",
  priority = false,
  isBlurred = false,
  removeWrapper = false
}) => {
  const { getValueBasedOnPixelRatio } = useDevicePixelRatio()


  if (!image) {
    return null
  }

  const source = new ImageInstance(image)

  return (
    <div className={`w-full h-full ${wrapperClassName}`}>
      <Image
        isBlurred={isBlurred}
        as={NextImage}
        style={{ width: '100%', height: 'inherit' }}
        width={getValueBasedOnPixelRatio(source.width)}
        height={getValueBasedOnPixelRatio(source.height)}
        src={source.url}
        sizes={source.sizes}
        alt={source.alternativeText}
        title={source.title}
        className={`block object-contain object-center ${imageClassName}`}
        priority={priority}
        removeWrapper={removeWrapper}
      />
    </div>
  )
}
