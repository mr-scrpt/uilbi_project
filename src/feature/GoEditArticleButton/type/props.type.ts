import { HTMLAttributes } from 'react'

export interface GoEditArticleButtonProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string

  text: string
  slug: string
}
