import {Heading} from '@chakra-ui/react';

interface MyLogoProps {
  marginBottom: string
}

export const MyLogo = ({marginBottom}: MyLogoProps) => {
  return (
    <Heading size='4xl' color='green.400' textAlign='center' marginBottom={marginBottom}>Quiz App</Heading>
  );
};
