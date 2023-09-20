import { MutableRefObject, useEffect } from 'react'

interface IIntersectionObserver {
  callback?: () => void
  targetRef: MutableRefObject<HTMLElement>
  rootRef: MutableRefObject<HTMLElement> | null
}
export const useIntersectionObserver = (params: IIntersectionObserver) => {
  const { callback, targetRef, rootRef } = params

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const target = targetRef.current
    const wrapper = rootRef?.current || null
    if (callback) {
      const opt = {
        root: wrapper,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, opt)

      observer.observe(target)
    }

    return () => {
      if (observer && target) {
        observer.unobserve(target)
      }
    }
  }, [targetRef, rootRef, callback])
}
