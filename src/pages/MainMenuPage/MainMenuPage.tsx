import css from './MainMenuPage.module.scss';

import {Flex} from '@chakra-ui/react';
import {MyAvatar} from 'components/MyAvatar';
import {MyLink} from 'components/MyLink';
import {MyLogo} from 'components/MyLogo';

import {RoutePath} from 'types';

export const MainMenuPage = () => {
  return (
    <Flex flexDirection='column'>
      <MyLogo marginBottom='45px' />
      <MyAvatar justifyContent={'center'} />
      <Flex flexDirection='column' gap='30px' maxWidth={'350px'} alignSelf={'center'}>
        <MyLink classNames={css.myLink} to={RoutePath.QUESTION_LIST} text={'начать игру'}/>
        {/*<MyButton variant='outline'>показать таблицу статистики</MyButton>*/}
      </Flex>
    </Flex>
  );
};
