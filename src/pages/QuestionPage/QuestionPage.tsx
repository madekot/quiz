import {useItemData} from 'api/useItemData';
import {MyQuestion} from 'components/MyQuestion';
import {PageLoader} from 'components/PageLoader';
import {isEmptyObject} from 'helpers';
import {useParamsId} from 'hooks/useParamsId';
import {useTotalQuestion} from '../../api/useTotalQuestion';

export const QuestionPage = () => {
  const id = useParamsId();
  const item = useItemData(String(id));
  const totalQuestion = useTotalQuestion();

  return (
    <PageLoader isLoading={isEmptyObject(item)}>
      {item &&
          <MyQuestion question={item.question} totalQuestion={totalQuestion} currentQuestion={Number(item.id)}/>
      }
    </PageLoader>
  );
};
