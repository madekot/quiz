import {usePercent} from './usePercent'
import {useTimer} from './useTimer'

import {CircularProgress, CircularProgressLabel} from '@chakra-ui/react'

interface TimerProps {
  marginTop?: string
  alignSelf?: 'flex-start'
}
const START_SECOND = 15
export const Timer = ({marginTop, alignSelf}: TimerProps) => {
  const {second} = useTimer(START_SECOND)
  const {percent} = usePercent(START_SECOND)

  return (
    <CircularProgress marginTop={marginTop} size='160px' thickness='5px' value={percent} color='green.400' alignSelf={alignSelf}>
      <CircularProgressLabel fontSize='5xl' color='green.700' fontWeight='bold' >{second}</CircularProgressLabel>
    </CircularProgress>
  )
}
