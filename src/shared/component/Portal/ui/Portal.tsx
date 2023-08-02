import { FC, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { PortalProps } from '../type/props.type'

export const Portal: FC<PortalProps> = (props) => {
  const { children, element } = props
  const [mounted, setMounted] = useState(false)

  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)
    containerRef.current =
      element ||
      (document.querySelector('#root')?.firstChild as HTMLElement) ||
      document.body

    return () => setMounted(false)
  }, [element])

  if (!mounted || !containerRef.current) {
    return null
  }

  return createPortal(children, containerRef.current)
}
