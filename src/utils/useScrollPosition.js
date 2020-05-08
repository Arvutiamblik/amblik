import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const isBrowser = typeof window !== `undefined`

function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = document.body
  const position = target.getBoundingClientRect()

  return { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps) {
  const position = useRef(getScrollPosition())

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      const currPos = getScrollPosition()
      effect({ prevPos: position.current, currPos })
      position.current = currPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

useScrollPosition.defaultProps = {
  deps: []
}