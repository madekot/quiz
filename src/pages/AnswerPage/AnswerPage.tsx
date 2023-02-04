import {Center} from '@chakra-ui/react';
import {useAllData} from 'api/useAllData';
import {Answer} from 'components/Answer';
import {Loader} from 'components/Loader';
import {MyContainer} from 'components/MyContainer';
import {useParamsId} from 'hooks/useParamsId';

export const AnswerPage = () => {
  const id = useParamsId();
  const data = useAllData();
  const item = data.find(el => el.id === id);

  return (
    <MyContainer>
      {!item &&
        <Center>
          <Loader />
        </Center>
      }
      {item &&
        <Answer answer={item.answer} totalQuestions={data.length}/>
      }
    </MyContainer>
  );
};
