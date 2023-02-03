import {useEffect, useState} from 'react'
const START_TIME = 15
export const usePercent = (startTime = START_TIME) => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const clearStamp = setInterval(
      () => setSeconds((prevState) => {
        if (prevState === startTime) {
          clearInterval(clearStamp)
          return prevState
        }
        return prevState + 1
      }),
      1000
    )

    return () => clearInterval(clearStamp)
  },
  [])
  return {seconds}
}