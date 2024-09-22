import { FC, ReactElement } from 'react'

import { BlogPageContentProps, BlogPostContentTypes, BlogPostImage, BlogPostTEX } from '@/api/interfaces/blogPost'
import PostContentImage from '../PostContentImage/PostContentImage'
import PostContentRenderer from '../PostContentRenderer/PostContentRenderer'

const renderBlogPostContent = (block: BlogPostContentTypes, index?: number): ReactElement | null => {
  const key = index
  switch (block.type) {
    case 'tex':
      return (
        <PostContentRenderer
          key={`TEX_${key}`}
          content={(block as BlogPostTEX).TEX}
        />
      )
    case 'image':
      return (
        <PostContentImage
          key={`image_${key}`}
          image={(block as BlogPostImage)?.image}
        />
      )
    default:
      return null
  }
}

export const PostContent: FC<BlogPageContentProps> = ({ content }) => {
  const blocks = content.map((e, i) => {
    return renderBlogPostContent(e, i)
  })

  return <>{blocks}</>
}
