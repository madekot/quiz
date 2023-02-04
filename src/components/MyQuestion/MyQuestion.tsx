import css from './MyQuestion.module.scss';

import {Flex} from '@chakra-ui/react';
import {MyAvatar} from 'components/MyAvatar';
import {MyContainer} from 'components/MyContainer';
import {MyLink} from 'components/MyLink';
import {MyLogo} from 'components/MyLogo';
import {TextGroup} from 'components/TextGroup';
import {Timer} from 'components/Timer';
import {useParamsId} from 'hooks/useParamsId';
import {Question, RoutePath} from 'types';

interface MyQuestionProps {
  question: Question['question']
  totalQuestion: number
  currentQuestion: number
}

export const MyQuestion = ({question, totalQuestion, currentQuestion}: MyQuestionProps) => {
  const id = useParamsId();

  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px' />
        <MyAvatar justifyContent={'flex-end'} />
        <Flex gap={'30'} marginBottom={'90px'} >
          <Timer marginTop={'60px'} alignSelf={'flex-start'} />
          <TextGroup text={question} heading={`${currentQuestion} / ${totalQuestion}`} />
        </Flex>
        <Flex display='flex' flexDirection='row' gap='30px' justifyContent={'flex-end'}>
          <MyLink classNames={css.myLink} to={RoutePath.ANSWER + `/${id}`} text={'Показать правильный ответ'}/>
        </Flex>
      </Flex>
    </MyContainer>
  );
};