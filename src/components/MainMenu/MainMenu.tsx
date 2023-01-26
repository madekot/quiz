import {Flex} from '@chakra-ui/react'
import {MyContainer} from '../MyContainer'
import {MyAvatar} from '../MyAvatar'
import {MyLogo} from '../MyLogo'
import {MyButton} from '../MyButton'

export const MainMenu = () => {
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px' />
        <MyAvatar justifyContent={'center'} />
        <Flex flexDirection='column' gap='30px' maxWidth={'350px'} alignSelf={'center'}>
          <MyButton>начать игру</MyButton>
          <MyButton variant='outline'>показать таблицу статистики</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}
