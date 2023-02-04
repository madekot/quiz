import css from './Answer.module.scss'

import {Flex} from '@chakra-ui/react'
import {MyAvatar} from 'components/MyAvatar'
import {MyButton} from 'components/MyButton'
import {MyContainer} from 'components/MyContainer'
import {MyLink} from 'components/MyLink'
import {MyLogo} from 'components/MyLogo'
import {TextGroup} from 'components/TextGroup'
import {useParamsId} from 'hooks/useParamsId'
import {useNavigate} from 'react-router-dom'
import {RoutePath} from 'types'

interface AnswerProps {
  answer: string
  totalQuestions: number
}

export const Answer = ({answer, totalQuestions}: AnswerProps) => {
  const id = useParamsId()
  const currentQuestion = id
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px' />
        <MyAvatar justifyContent={'flex-end'} />
        <Flex gap={'30'} marginBottom={'91px'} justifyContent={'center'}>
          <TextGroup text={answer} heading={'Правильный ответ'} maxWidth={'730px'} />
        </Flex>
        <Flex display='flex' flexWrap={'wrap'} gap='30px' justifyContent={'center'}>
          <MyButton variant={'outline'} onClick={goBack} flexGrow={1}>Вернуться назад</MyButton>
          {totalQuestions === currentQuestion &&
            <MyLink classNames={css.myLink} to={RoutePath.QUESTIONS} text={'Вернуться к списку вопросов'} />
          }
          {totalQuestions !== currentQuestion &&
            <MyLink classNames={css.myLink} to={`${RoutePath.QUESTION_ITEM}/${id + 1}`} text={'Следующий вопрос'} />
          }
        </Flex>
      </Flex>
    </MyContainer>
  )
}
