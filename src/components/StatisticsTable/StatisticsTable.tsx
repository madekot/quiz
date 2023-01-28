import {MyButton} from '../MyButton'
import {MyContainer} from '../MyContainer'

import {MyLogo} from '../MyLogo'
import {MyTable} from '../MyTable'
import {TextGroup} from '../TextGroup'

import {Center, Flex} from '@chakra-ui/react'

interface StatisticsTableProps {
  handleStartGameClick: () => void
  handleMainMenuClick: () => void
  correctAnswers: number
  totalQuestion: number
}

export const StatisticsTable = ({handleStartGameClick, handleMainMenuClick, totalQuestion, correctAnswers}: StatisticsTableProps) => {
  const percentCorrectAnswers =  100 / totalQuestion * correctAnswers
  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='50px'/>
        <Center marginBottom={'20px'}>
          <TextGroup heading={'Таблица статистики игрока'} text={`Вы дали ${percentCorrectAnswers}% правильных ответов`} textTextAlign={'center'}/>
        </Center>
        <MyTable marginBottom={'92px'}/>
        <Flex
          display='flex'
          flexWrap={'wrap'}
          gap='30px'
          justifyContent={'center'}
        >
          <MyButton flexGrow={1} maxWidth={'350px'} onClick={handleStartGameClick}>Начать игру</MyButton>
          <MyButton flexGrow={1} maxWidth={'350px'} variant='outline' onClick={handleMainMenuClick}>Вернуться в главное меню</MyButton>
        </Flex>
      </Flex>
    </MyContainer>
  )
}
