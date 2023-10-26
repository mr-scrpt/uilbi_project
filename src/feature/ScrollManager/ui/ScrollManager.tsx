import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { ScrollManagerProps } from '../type/props.type';
import cls from './ScrollManager.module.scss';

export const ScrollManager = memo((props:ScrollManagerProps) => {
  const { className } = props;

  const clsScrollManager = classNames(cls.scrollManager, [className], {});
  return (
    <div className={clsScrollManager}>

    </div>
  );
});
