import {Flex, Heading} from '@chakra-ui/react';
import {MyButton} from 'components/MyButton';

import {Link} from 'react-router-dom';

export const NotFondPage = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'} flexGrow={1} gap={'30px'}>
      <Heading size='4xl' color='green.400' textAlign='center' marginBottom={'30px'}>Такой страницы не найдено</Heading>
      <MyButton>
        <Link to={'/'} >вурнуться на главную</Link>
      </MyButton>
    </Flex>
  );
};
