import { FC } from 'react'
import { Loader } from 'shared/component/Loader'
import { classNames } from 'shared/lib/classNames'
import { LoaderContentProps } from '../type/props.type'
import cls from './LoaderContent.module.scss'

export const LoaderContent: FC<LoaderContentProps> = (props) => {
  const { className } = props

  const clsLoaderContent = classNames(cls.loaderContent, [className], {})
  return (
    <div className={clsLoaderContent}>
      <Loader className={cls.loader} />
    </div>
  )
}
