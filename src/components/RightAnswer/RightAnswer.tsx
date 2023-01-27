import {MyContainer} from '../MyContainer'
import {Flex} from '@chakra-ui/react'
import {MyLogo} from '../MyLogo'
import {MyAvatar} from '../MyAvatar'
import {TextGroup} from '../TextGroup'
import {MyButton} from '../MyButton'


interface RightAnswerProps {
  handleKnowClick: () => void
  handleDonKnowClick: () => void
  answer: string
}

export const RightAnswer = (props: RightAnswerProps) => {
  const {answer, handleKnowClick, handleDonKnowClick} = props
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px' />
        <MyAvatar justifyContent={'flex-end'} />
        <Flex gap={'30'} marginBottom={'91px'} justifyContent={'center'}>
          <TextGroup text={answer} heading={'Правильный ответ'} maxWidth={'730px'} />
        </Flex>
        <Flex display='flex' flexWrap={'wrap'} gap='30px' justifyContent={'center'}>
          <MyButton flexGrow={1} maxWidth={'350px'} onClick={handleKnowClick}>Молодец, что знаешь</MyButton>
          <MyButton flexGrow={1} maxWidth={'350px'} onClick={handleDonKnowClick} variant='outline'>Тут у тебя
            пробел в знаниях</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}
