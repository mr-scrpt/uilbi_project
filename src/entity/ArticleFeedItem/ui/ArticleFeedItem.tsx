import { ArticleBlockVariantEnum, IArticleBlockText } from 'entity/Article'
import { ArticleViewEnum } from 'entity/ArticleFeed'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Avatar } from 'shared/component/Avatar'
import { Button } from 'shared/component/Button'
import { Card } from 'shared/component/Card'
import { Img } from 'shared/component/Img'
import { LinkApp } from 'shared/component/LinkApp'
import { TabList } from 'shared/component/TabList'
import { Title, TitleSizeEnum } from 'shared/component/Title'
import { View } from 'shared/component/View'
import { RoutePath } from 'shared/config/configRouter/configRouter'
import { useHover } from 'shared/lib'
import { classNames } from 'shared/lib/classNames'

import { ArticleFeedItemProps } from '../type/props.type'
import cls from './ArticleFeedItem.module.scss'

export const ArticleFeedItem = memo((props: ArticleFeedItemProps) => {
  const { className, view = ArticleViewEnum.TILE, article } = props
  const { user } = article

  const clsCard = classNames(cls.card, [className], {})

  const [_, bindHover] = useHover()

  const { t } = useTranslation()

  // const navigate = useNavigate()
  //
  // const onOpenArticle = useCallback(() => {
  //   navigate(RoutePath.article + article.id)
  // }, [article.id, navigate])

  const text = article.blocks.find(
    (block) => block.variant === ArticleBlockVariantEnum.TEXT
  ) as IArticleBlockText

  const tabsList = article.tagsId.map((item) => ({
    value: item,
    name: item,
  }))
  let articleContent

  console.log('article id', article.id)
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
        <div className={cls.taglist}>
          {/* {article.tagsId && article.tagsId.map((item) => <span>{item}</span>)} */}
          <TabList tabsList={tabsList} />
        </div>
        <div className={cls.imgbox}>
          <Img src={article.img} alt={article.title} className={cls.imgrow} />
        </div>
        {text && (
          <div className={cls.content}>
            {text.paragraphs[0].substring(0, 350)}...
          </div>
        )}
        <div className={cls.footer}>
          <LinkApp to={RoutePath.article + article.id}>
            <Button>{t('read-more')}</Button>
          </LinkApp>
          <View count={article.views} />
        </div>
      </div>
    )
  }

  if (view === ArticleViewEnum.TILE) {
    articleContent = (
      <div className={cls.inner} tabIndex={0} role="button">
        <div className={cls.imgbox}>
          <LinkApp to={RoutePath.article + article.id}>
            <Img src={article.img} alt={article.title} />
          </LinkApp>
          <div className={cls.date}>{article.createdAt}</div>
        </div>
        <div className={cls.content}>
          <div className={cls.media}>
            <div className={cls.taglist}>
              {article.tagsId &&
                article.tagsId.map((item) => <span>{item}</span>)}
            </div>
            <View count={article.views} />
          </div>

          <LinkApp to={RoutePath.article + article.id}>
            <Title className={cls.title}>{article.title}</Title>
          </LinkApp>
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
