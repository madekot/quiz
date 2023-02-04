import {Center} from '@chakra-ui/react'
import {useAllData} from 'api/useAllData'
import {Loader} from 'components/Loader'
import {MyContainer} from 'components/MyContainer'
import {MyQuestion} from 'components/MyQuestion'
import {useParamsId} from 'hooks/useParamsId'

export const QuestionPage = () => {
  const id = useParamsId()
  const data = useAllData()
  const item = data.find(el => el.id === id)

  return (
    <MyContainer>
      {Boolean(!data.length) &&
        <Center>
          <Loader />
        </Center>
      }
      {item &&
        <MyQuestion question={item.question} totalQuestion={data.length} currentQuestion={item.id}  />
      }
    </MyContainer>
  )
}
