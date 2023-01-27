import {Flex} from '@chakra-ui/react'
import {MyContainer} from '../MyContainer'
import {MyAvatar} from '../MyAvatar'
import {MyLogo} from '../MyLogo'
import {MyButton} from '../MyButton'

interface MainMenuProps {
  handlePlayGameClick: () => void
  handleShowTable: () => void
}

export const MainMenu = ({handlePlayGameClick, handleShowTable}: MainMenuProps) => {
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px' />
        <MyAvatar justifyContent={'center'} />
        <Flex flexDirection='column' gap='30px' maxWidth={'350px'} alignSelf={'center'}>
          <MyButton onClick={handlePlayGameClick}>начать игру</MyButton>
          <MyButton variant='outline' onClick={handleShowTable}>показать таблицу статистики</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}
