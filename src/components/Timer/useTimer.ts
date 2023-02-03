import {useTick} from './useTick'

import {useState} from 'react'

export const useTimer = (startSecond: number) => {
  const [second, setSecond] = useState(startSecond)

  useTick((clearStamp) => {
    setSecond((prevSecond) => {
      if (prevSecond === 0) {
        clearInterval(clearStamp)
        return prevSecond
      }
      return prevSecond - 1
    })
  })
  return {second}
}