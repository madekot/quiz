import {Avatar, AvatarBadge, Button, Flex, Heading} from "@chakra-ui/react";
import {MyContainer} from "../MyContainer";

interface MainMenuProps {
}

export const MainMenu = ({}: MainMenuProps) => {
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <Heading size='4xl' color='green.400' textAlign={'center'} marginBottom={'45px'}>Quiz App</Heading>
        <Flex justifyContent={'center'}>
          <Avatar size='xl' marginBottom='40px'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        </Flex>
        <Flex flexDirection={'column'} gap='30px' maxW='540px'>
          <Button>начать игру</Button>
          <Button variant='outline'>показать таблицу статистики</Button>
        </Flex>
      </Flex>
    </MyContainer>
  )
}
