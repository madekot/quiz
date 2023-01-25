import {MyContainer} from "../MyContainer";
import {Avatar, AvatarBadge, Button, Flex, Heading} from "@chakra-ui/react";

interface MyQuestionProps {
}

export const MyQuestion = ({}: MyQuestionProps) => {
  return (
    <MyContainer>
      <Flex flexDirection='column' flexGrow={1} maxWidth='950px'>
        <Heading size='4xl' color='green.400' textAlign={'center'} marginBottom={'45px'}>Quiz App</Heading>
        <Flex justifyContent={'right'}>
          <Avatar size='xl' marginBottom='40px'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        </Flex>
        <Flex display='flex' flexWrap={'wrap'}
              gap='30px'
              justifyContent={'center'}>
          <Button flexGrow={1} maxWidth={'350px'}>Молодец, что знаешь</Button>
          <Button flexGrow={1} maxWidth={'350px'} variant='outline'>Тут у тебя пробел в знаниях</Button>
        </Flex>
      </Flex>
    </MyContainer>
  )
}