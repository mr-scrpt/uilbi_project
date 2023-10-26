import { memo } from 'react'
import { Title } from '@/shared/component/Title'
import { classNames } from '@/shared/lib/classNames'

import { ArticleBlockTextProps } from '../../type/props.type'
import cls from './ArticleBlockText.module.scss'

export const ArticleBlockText = memo((props: ArticleBlockTextProps) => {
  const { className, block } = props

  const clsArticleBlockText = classNames(cls.articleBlockText, [className], {})
  return (
    <div className={clsArticleBlockText}>
      {block.title && <Title>{block.title}</Title>}

      {block.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  )
})
