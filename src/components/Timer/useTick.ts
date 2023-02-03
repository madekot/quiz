import {useEffect} from 'react'

export const useTick = (cb: (clearStamp: number) => void) => {
  useEffect(() => {
    const clearStamp = setInterval(
      (clearStamp) => cb(clearStamp),
      1000
    )

    return () => clearInterval(clearStamp)
  }, [])
}