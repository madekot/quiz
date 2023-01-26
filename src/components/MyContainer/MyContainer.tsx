import {Container} from "@chakra-ui/react";
import {ReactNode} from 'react';

interface MyContainerProps {
  children: ReactNode
}

export const MyContainer = ({children}: MyContainerProps) => {
  return (
    <Container marginTop='182px' maxWidth='952px' marginLeft='auto' marginRight='auto'>
      {children}
    </Container>
  )
}
