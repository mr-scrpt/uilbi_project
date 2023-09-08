import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Icon, IconEnum } from 'shared/component/Icon'
import { Img } from 'shared/component/Img'
import { Skeleton } from 'shared/component/Skeleton'
import { Title, TitleSizeEnum } from 'shared/component/Title'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader } from 'shared/lib/component/DynamicModuleLoader/DynamicModuleLoader'
import { ReducerList } from 'shared/lib/component/DynamicModuleLoader/type/props.type'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { getArticleData } from '../../model/selector/getArticleData'
import { getArticleError } from '../../model/selector/getArticleError'
import { getArticleIsLoading } from '../../model/selector/getArticleIsLoading'
import { fetchArticleData } from '../../model/service/fethcAritcleData'
import { articleReducer } from '../../model/slice/articleSlice'
import {
  ArticleBlockVariantEnum,
  ArticleBlockVariantType,
  IArticleBlockCode,
  IArticleBlockImg,
  IArticleBlockText,
} from '../../type/article.type'
import { ArticleProps } from '../../type/props.type'
import { ArticleBlockCode } from '../ArticleBlockCode/ArticleBlockCode'
import { ArticleBlockImg } from '../ArticleBlockImg/ArticleBlockImg'
import { ArticleBlockText } from '../ArticleBlockText/ArticleBlockText'
import cls from './Article.module.scss'

export const Article = memo((props: ArticleProps) => {
  const { className, articleId } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articleData = useSelector(getArticleData)
  const articleError = useSelector(getArticleError)
  const articleIsLoading = useSelector(getArticleIsLoading)

  useEffect(() => {
    dispatch(fetchArticleData(articleId))
  }, [dispatch, articleId])

  const clsArticle = classNames(cls.article, [className], {})

  const reducers: ReducerList = {
    article: articleReducer,
  }
  const blockCollection = {
    [ArticleBlockVariantEnum.CODE]: useCallback(
      (block: ArticleBlockVariantType) => (
        <ArticleBlockCode key={block.id} block={block as IArticleBlockCode} />
      ),
      []
    ),
    [ArticleBlockVariantEnum.IMAGE]: useCallback(
      (block: ArticleBlockVariantType) => (
        <ArticleBlockImg key={block.id} block={block as IArticleBlockImg} />
      ),
      []
    ),
    [ArticleBlockVariantEnum.TEXT]: useCallback(
      (block: ArticleBlockVariantType) => (
        <ArticleBlockText key={block.id} block={block as IArticleBlockText} />
      ),
      []
    ),
  }

  const renderBlock = useCallback((block: ArticleBlockVariantType) => {
    const RenderBlock = blockCollection[block.variant]

    if (RenderBlock) {
      return RenderBlock(block)
    }

    return null
  }, [])

  let content

  if (articleIsLoading) {
    content = (
      <div className={cls.inner}>
        <Skeleton className={cls.banner} height={100} />
        <Skeleton className={cls.widget} height={20} maxWidth={200} />
        <Skeleton className={cls.widget} height={20} maxWidth={100} />
        <Skeleton className={cls.widget} height={300} />
      </div>
    )
  } else if (articleError) {
    content = <div className="error">Is error data</div>
  } else if (articleData) {
    content = (
      <>
        <div className={cls.banner}>
          <Img
            src={articleData.img}
            alt={articleData.title}
            title={articleData.title}
          />
        </div>
        <Title size={TitleSizeEnum.XL}>{articleData.title}</Title>
        <Title size={TitleSizeEnum.M}>{articleData.subtitle}</Title>
        <div className={cls.widget}>
          <div className={cls.row}>
            <Icon icon={IconEnum.EYE} className={cls.rowIcon} />
            <div className={cls.rowData}>{articleData.views}</div>
          </div>
          <div className={cls.row}>
            <Icon icon={IconEnum.CALENDAR} className={cls.rowIcon} />
            <div className={cls.rowData}>{articleData.createdAt}</div>
          </div>
        </div>
        <div className="content">{articleData?.blocks.map(renderBlock)}</div>
      </>
    )
  }

  return (
    <DynamicModuleLoader reducerList={reducers} removeAfterUnmount>
      <div className={clsArticle}>{content}</div>
    </DynamicModuleLoader>
  )
})
