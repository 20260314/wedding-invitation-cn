import { HTMLAttributes, useEffect, useRef } from "react"

export const LazyDiv = (props: HTMLAttributes<HTMLDivElement>) => {
  const ref = useRef({} as HTMLDivElement)

  useEffect(() => {
    const divElement = ref.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("lazy-active")
          observer.unobserve(entry.target)
        }
      })
    },
   {
      rootMargin: "-30% 0px -30% 0px", // 진입을 더 깊게 해야 발동됨
    }                                                                                                             
 )
    observer.observe(divElement)

    return () => observer.unobserve(divElement)
  }, [])
  return <div ref={ref} {...props} />
}
