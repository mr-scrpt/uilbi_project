import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { TagsProps } from '../type/props.type';
import cls from './Tags.module.scss';

export const Tags = memo((props:TagsProps) => {
  const { className } = props;

  const clsTags = classNames(cls.tags, [className], {});
  return (
    <div className={clsTags}>

    </div>
  );
});
