import {Center} from '@chakra-ui/react';
import {Loader} from 'components/Loader';
import {ReactElement} from 'react';

interface PageLoaderProps {
  children?: ReactElement
  data?: any[]
}

export const PageLoader = (props: PageLoaderProps) => {
  const {children, data} = props;
  return (
    <>
      {!data?.length ?
        <Center>
          <Loader />
        </Center>
        : children
      }
    </>
  );
};
