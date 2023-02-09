import {useAllData} from 'api/useAllData';
import {QuestionsList} from 'components/QuestionsList';

export const QuestionsPage = () => {
  const data = useAllData();

  return (
    <QuestionsList data={data} />
  );
};
