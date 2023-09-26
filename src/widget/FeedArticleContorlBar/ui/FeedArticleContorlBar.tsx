import { ArticleViewEnum } from 'entity/Article'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { useAppDispatch } from 'shared/lib/component/useAppDispatch'

import { FeedArticleContorlBarProps } from '../type/props.type'
import cls from './FeedArticleContorlBar.module.scss'

export const FeedArticleContorlBar = memo(
  (props: FeedArticleContorlBarProps) => {
    const { className } = props
    // const view = useSelector(getFeedArticleView)

    const dispatch = useAppDispatch()

    // const onChangeView = useCallback(
    //   (view: ArticleViewEnum) => {
    //   },
    //   [dispatch]
    // )
    // const onChangeSort = useCallback((sort: SortFieldEnum) => {
    //   dispatch()
    // }, [])

    const clsFeedArticleContorlBar = classNames(
      cls.feedArticleContorlBar,
      [className],
      {}
    )
    return (
      <div className={clsFeedArticleContorlBar}>
        {/* {view && ( */}
        {/*   <FeedView */}
        {/*     className={cls.view} */}
        {/*     view={view} */}
        {/*     changeView={onChangeView} */}
        {/*   /> */}
        {/* )} */}
        {/* <FeedSort /> */}
        {/* <FeedOrderDirection /> */}
        {/* <FeedSearch /> */}
      </div>
    )
  }
)
