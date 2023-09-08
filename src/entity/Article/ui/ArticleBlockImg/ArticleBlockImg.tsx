import { memo } from 'react'
import { Img } from 'shared/component/Img'
import { classNames } from 'shared/lib/classNames'

import { ArticleBlockImgProps } from '../../type/props.type'
import cls from './ArticleBlockImg.module.scss'

export const ArticleBlockImg = memo((props: ArticleBlockImgProps) => {
  const { className, block } = props

  const clsArticleBlockImg = classNames(cls.articleBlockImg, [className], {})
  return <Img className={clsArticleBlockImg} src={block.src} />
})
