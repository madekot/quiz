import {MyContainer} from '../MyContainer'
import {Flex} from '@chakra-ui/react'
import {Timer} from '../Timer'
import {TextGroup} from '../TextGroup'
import {MyAvatar} from '../MyAvatar'
import {MyLogo} from '../MyLogo'
import {MyButton} from '../MyButton'

const TEXT_INFO = `Сложно сказать, почему интерактивные прототипы призваны к ответу. Сложно сказать, почему некоторые
        особенности внутренней политики преданы социально-демократической анафеме. Как принято считать,
        предприниматели в сети интернет объективно рассмотрены соответствующими инстанциями.`

export const MyQuestion = () => {
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px'/>
        <MyAvatar justifyContent={'flex-end'}/>
        <Flex gap={'30'} marginBottom={'91px'}>
          <Timer marginTop={'60px'} alignSelf={'flex-start'}/>
          <TextGroup text={TEXT_INFO} heading={'1 / 20'}/>
        </Flex>
        <Flex display='flex' flexDirection='row' gap='30px' justifyContent={'flex-end'}>
          <MyButton flexGrow={1} maxWidth={'825px'}> Показать правильный ответ</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}