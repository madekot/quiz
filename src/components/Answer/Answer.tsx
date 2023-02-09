import {ControlsComponent} from './ControlsComponent';

import {Flex} from '@chakra-ui/react';
import {MyAvatar} from 'components/MyAvatar';
import {MyButton} from 'components/MyButton';
import {MyContainer} from 'components/MyContainer';
import {MyLogo} from 'components/MyLogo';
import {TextGroup} from 'components/TextGroup';
import {useNavigate} from 'react-router-dom';

interface AnswerProps {
  answer: string
}

export const Answer = ({answer}: AnswerProps) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <MyContainer>
      <Flex flexDirection='column'>
        <MyLogo marginBottom='45px' />
        <MyAvatar justifyContent={'flex-end'} />
        <Flex gap={'30'} marginBottom={'91px'} justifyContent={'center'}>
          <TextGroup text={answer} heading={'Правильный ответ'} maxWidth={'730px'} />
        </Flex>
        <Flex display='flex' flexWrap={'wrap'} gap='30px' justifyContent={'center'}>
          <MyButton variant={'outline'} onClick={goBack} flexGrow={1}>Вернуться назад</MyButton>
          <ControlsComponent />
        </Flex>
      </Flex>
    </MyContainer>
  );
};
