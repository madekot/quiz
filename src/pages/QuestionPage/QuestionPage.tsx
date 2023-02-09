import {useItemData} from 'api/useItemData';
import {MyContainer} from 'components/MyContainer';
import {MyQuestion} from 'components/MyQuestion';
import {PageLoader} from 'components/PageLoader';
import {useParamsId} from 'hooks/useParamsId';

export const QuestionPage = () => {
  const id = useParamsId();
  const {item, data} = useItemData(id);

  return (
    <MyContainer>
      <PageLoader data={data}>
        {item &&
          <MyQuestion question={item.question} totalQuestion={data.length} currentQuestion={item.id}/>
        }
      </PageLoader>
    </MyContainer>
  );
};
