import {useItemData} from 'api/useItemData';
import {Answer} from 'components/Answer';
import {MyContainer} from 'components/MyContainer';
import {PageLoader} from 'components/PageLoader';
import {useParamsId} from 'hooks/useParamsId';

export const AnswerPage = () => {
  const id = useParamsId();
  const {item, data} = useItemData(id);

  return (
    <MyContainer>
      <PageLoader data={data}>
        {item &&
          <Answer answer={item.answer} totalQuestions={data.length}/>
        }
      </PageLoader>
    </MyContainer>
  );
};
