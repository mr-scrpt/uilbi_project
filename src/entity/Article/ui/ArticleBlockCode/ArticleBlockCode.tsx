import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'

import { ArticleBlockCodeProps } from '../../type/props.type'
import cls from './ArticleBlockCode.module.scss'

export const ArticleBlockCode = memo((props: ArticleBlockCodeProps) => {
  const { className, block } = props

  const clsArticleBlockCode = classNames(cls.articleBlockCode, [className], {})
  return (
    <div className={clsArticleBlockCode}>
      <code>
        <pre>{block.code}</pre>
      </code>
    </div>
  )
})
