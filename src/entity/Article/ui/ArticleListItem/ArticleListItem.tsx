import {
  ArticleBlockVariantEnum,
  IArticleBlockText,
} from 'entity/Article/type/article.type'
import { ArticleListItemProps } from 'entity/Article/type/props.type'
import { ArticleViewEnum } from 'entity/Article/type/view.enum'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Avatar } from 'shared/component/Avatar'
import { Button } from 'shared/component/Button'
import { Card } from 'shared/component/Card'
import { Img } from 'shared/component/Img'
import { Title, TitleSizeEnum } from 'shared/component/Title'
import { View } from 'shared/component/View'
import { RoutePath } from 'shared/config/configRouter/configRouter'
import { useHover } from 'shared/lib'
import { classNames } from 'shared/lib/classNames'

import cls from './ArticleListItem.module.scss'

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, view = ArticleViewEnum.TILE, article } = props
  const { user } = article

  const clsCard = classNames(cls.card, [className], {})

  const [_, bindHover] = useHover()

  const { t } = useTranslation()

  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article + article.id)
  }, [article.id, navigate])

  const text = article.blocks.find(
    (block) => block.variant === ArticleBlockVariantEnum.TEXT
  ) as IArticleBlockText

  let articleContent

  if (view === ArticleViewEnum.ROW) {
    articleContent = (
      <div className={cls.inner}>
        <div className={cls.header}>
          {user.avatar && (
            <Avatar
              source={user.avatar}
              title={user.username}
              className={cls.avatar}
            />
          )}
          <Title size={TitleSizeEnum.M} className={cls.author}>
            {user.username}
          </Title>
          <div className={cls.date}>{article.createdAt}</div>
        </div>
        <Title className={cls.title}>{article.title}</Title>
        <div className={cls.taglist}>{article.type.join(', ')}</div>
        <div className={cls.imgbox}>
          <Img src={article.img} alt={article.title} className={cls.imgrow} />
        </div>
        {text && (
          <div className={cls.content}>
            {text.paragraphs[0].substring(0, 350)}...
          </div>
        )}
        <div className={cls.footer}>
          <Button onClick={onOpenArticle}>{t('read-more')}</Button>
          <View count="5" />
        </div>
      </div>
    )
  }

  if (view === ArticleViewEnum.TILE) {
    articleContent = (
      <div
        className={cls.inner}
        onClick={onOpenArticle}
        tabIndex={0}
        role="button"
      >
        <div className={cls.imgbox}>
          <Img src={article.img} alt={article.title} />
          <div className={cls.date}>{article.createdAt}</div>
        </div>
        <div className={cls.content}>
          <div className={cls.media}>
            <div className={cls.taglist}>{article.type.join(', ')}</div>
            <View count="5" />
          </div>

          <Title className={cls.title}>{article.title}</Title>
        </div>
      </div>
    )
  }

  return (
    <Card className={clsCard} {...bindHover}>
      {articleContent}
    </Card>
  )
})
