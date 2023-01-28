import {MyAvatar} from '../MyAvatar'
import {MyButton} from '../MyButton'
import {MyContainer} from '../MyContainer'
import {MyLogo} from '../MyLogo'
import {TextGroup} from '../TextGroup'
import {Timer} from '../Timer'

import {Flex} from '@chakra-ui/react'

interface MyQuestionProps {
  handleShowAnswerClick: () => void
  question: string
  totalQuestion: number
  currentQuestion: number
}

export const MyQuestion = ({question, totalQuestion, currentQuestion, handleShowAnswerClick}: MyQuestionProps) => {
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px' />
        <MyAvatar justifyContent={'flex-end'} />
        <Flex gap={'30'} marginBottom={'91px'} >
          <Timer marginTop={'60px'} alignSelf={'flex-start'} />
          <TextGroup text={question} heading={`${currentQuestion} / ${totalQuestion}`}  />
        </Flex>
        <Flex display='flex' flexDirection='row' gap='30px' justifyContent={'flex-end'}>
          <MyButton flexGrow={1} maxWidth={'825px'} onClick={handleShowAnswerClick}> Показать правильный ответ</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}