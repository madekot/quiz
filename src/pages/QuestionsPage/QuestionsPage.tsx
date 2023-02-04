import {useAllData} from 'api/useAllData'
import { MyContainer } from 'components/MyContainer'
import {QuestionsList} from 'components/QuestionsList'

export const QuestionsPage = () => {
  const data = useAllData()

  return (
    <MyContainer>
      <QuestionsList data={data} />
    </MyContainer>
  )
}
