import {Flex} from '@chakra-ui/react';

import {useParamsId} from 'hooks/useParamsId';
import {Question} from '../../api/mockApi';
import {MyAvatar} from '../MyAvatar';
import {MyContainer} from '../MyContainer';
import {MyLink} from '../MyLink';
import {MyLogo} from '../MyLogo';
import {RoutePath} from '../Router/RouterApp';
import {TextGroup} from '../TextGroup';
import {Timer} from '../Timer';
import css from './MyQuestion.module.scss';

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
