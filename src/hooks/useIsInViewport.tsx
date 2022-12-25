import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function useIsInViewport(ref: any) {
  const [intersecting, setIntersecting] = useState(false)  ;


  const observer = useMemo(() => 
    new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)), 
  [])

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])
  
  return [intersecting] 
}
