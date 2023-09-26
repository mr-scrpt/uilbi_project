import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ArticleFeedProps } from '../type/props.type';
import cls from './ArticleFeed.module.scss';

export const ArticleFeed = memo((props:ArticleFeedProps) => {
  const { className } = props;

  const clsArticleFeed = classNames(cls.articleFeed, [className], {});
  return (
    <div className={clsArticleFeed}>

    </div>
  );
});
