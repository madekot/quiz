import {Heading, Stack, Text} from "@chakra-ui/react";

interface TextGroupProps {
  heading?: string
  text?: string
  maxWidth?: string
}

export const TextGroup = ({heading, text, maxWidth}: TextGroupProps) => {
  return (
    <Stack color={'gray.700'} spacing='17px' maxWidth={maxWidth}>
      {heading && <Heading as={'p'} size='lg' textAlign='center'>{heading}</Heading>}
      {text && <Text fontSize='2xl'>{text}</Text>}
    </Stack>
  )
}
