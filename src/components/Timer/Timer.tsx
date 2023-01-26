import {CircularProgress, CircularProgressLabel} from "@chakra-ui/react";

interface TimerProps {
  marginTop?: string
  alignSelf?: 'flex-start'
}

export const Timer = ({marginTop, alignSelf}: TimerProps) => {
  return (
    <CircularProgress marginTop={marginTop} size='160px' thickness='5px' value={15} color='green.400' alignSelf={alignSelf}>
      <CircularProgressLabel fontSize='5xl' color='green.700' fontWeight='bold' >15</CircularProgressLabel>
    </CircularProgress>
  )
}
