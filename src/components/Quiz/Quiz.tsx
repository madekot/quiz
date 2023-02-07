import {useState} from 'react'

import {MainMenu} from '../MainMenu'
import {MyQuestion} from '../MyQuestion'
import {RightAnswer} from '../RightAnswer'
import {StatisticsTable} from '../StatisticsTable'

import dataMock from '../../mock/data.json'

type StatusGame = 'game' | 'end' | 'mainScreen' | 'table' | 'rightAnswer'

interface DataQuestion {
  id: number
  question: string,
  answer: string
}

export const Quiz = () => {
  const [gameStatus, setGameStatus] = useState<StatusGame>('mainScreen')
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(0)

  const questions: DataQuestion[] = dataMock.questions
  const totalQuestions = questions.length
  const question = questions[indexCurrentQuestion]?.question
  const answer = questions[indexCurrentQuestion]?.answer
  const showQuestion = () => setGameStatus('game')
  const showMainScreen = () => setGameStatus('mainScreen')
  const showTable = () => setGameStatus('table')

  const saysRight = () => {
    showQuestion()
    if (indexCurrentQuestion === totalQuestions) return
    setCorrectAnswers((prevState) => prevState + 1)
    setIndexCurrentQuestion((prevState) => prevState + 1)
  }

  const saysWrong = () => {
    showQuestion()
    if (indexCurrentQuestion === totalQuestions) return
    setIndexCurrentQuestion((prevState) => prevState + 1)
  }

  const restartGame = () => {
    setIndexCurrentQuestion(0)
    setCorrectAnswers(0)
  }

  const renderComponent = () => {
    if (indexCurrentQuestion === totalQuestions) {
      showTable()
      setIndexCurrentQuestion(0)
    }

    switch (gameStatus) {
    case 'mainScreen':
      return (
        <MainMenu
          handlePlayGameClick={() => {
            restartGame()
            showQuestion()
          }}
          handleShowTable={showTable}
        />
      )
    case 'game':
      return (
        <MyQuestion
          question={question}
          currentQuestion={indexCurrentQuestion + 1}
          totalQuestion={totalQuestions}
          handleShowAnswerClick={() => setGameStatus('rightAnswer')} />
      )
    case 'rightAnswer':
      return (
        <RightAnswer
          answer={answer}
          handleDonKnowClick={saysWrong}
          handleKnowClick={saysRight}
        />
      )
    case 'table':
      return (
        <StatisticsTable
          totalQuestion={totalQuestions}
          correctAnswers={correctAnswers}
          handleStartGameClick={() => {
            restartGame()
            showQuestion()
          }}
          handleMainMenuClick={() => {
            showMainScreen()
          }} />
      )
    }
    return null
  }

  return renderComponent()
}
