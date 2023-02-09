import {useItemData} from 'api/useItemData';
import {useTotalQuestion} from 'api/useTotalQuestion';
import {MyQuestion} from 'components/MyQuestion';
import {PageLoader} from 'components/PageLoader';
import {isEmptyObject} from 'helpers';
import {useParamsId} from 'hooks/useParamsId';

export const QuestionPage = () => {
  const id = useParamsId();
  const item = useItemData(id);
  const totalQuestion = useTotalQuestion();

  return (
    <PageLoader isLoading={isEmptyObject(item)}>
      {item &&
          <MyQuestion question={item.question} totalQuestion={totalQuestion} currentQuestion={item.id}/>
      }
    </PageLoader>
  );
};
