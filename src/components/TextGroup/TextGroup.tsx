import {Heading, Stack, Text} from '@chakra-ui/react';

interface TextGroupProps {
  heading?: string
  text?: string
  maxWidth?: string

  textTextAlign?: 'center'
}

export const TextGroup = ({heading, text, maxWidth, textTextAlign}: TextGroupProps) => {
  return (
    <Stack color={'gray.700'} spacing='17px' maxWidth={maxWidth} flexGrow={1}>
      {heading && <Heading as={'p'} size='lg' textAlign='center'>{heading}</Heading>}
      {text && <Text fontSize='2xl' textAlign={textTextAlign}>{text}</Text>}
    </Stack>
  );
};
