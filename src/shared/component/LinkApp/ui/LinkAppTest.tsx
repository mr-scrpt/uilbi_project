import { FC, ReactNode, Ref, forwardRef, memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

export const LinkAppTest = forwardRef(
  (props: AppLinkProps, ref: Ref<HTMLAnchorElement>) => {
    const { to, className, children, ...otherProps } = props

    return (
      <Link to={to} {...otherProps} ref={ref}>
        {children}
      </Link>
    )
  }
)
