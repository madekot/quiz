import {Center, Container} from "@chakra-ui/react";
import {ReactNode} from 'react';

interface MyContainerProps {
  children: ReactNode
}

export const MyContainer = ({children}: MyContainerProps) => {
  return (
    <Container maxW='1142px'>
      <Center marginTop='182px'>
        {children}
      </Center>
    </Container>
  )
}
