import {useItemData} from 'api/useItemData';
import {Answer} from 'components/Answer';
import {PageLoader} from 'components/PageLoader';
import {isEmptyObject} from 'helpers';
import {useParamsId} from 'hooks/useParamsId';

export const AnswerPage = () => {
  const id = useParamsId();
  const item = useItemData(id);

  return (
    <PageLoader isLoading={isEmptyObject(item)}>
      {item &&
          <Answer answer={item.answer}/>
      }
    </PageLoader>
  );
};
