import {Center} from '@chakra-ui/react';
import {Loader} from 'components/Loader';
import {ReactElement} from 'react';

interface PageLoaderProps {
  children?: ReactElement
  isLoading: boolean
}

export const PageLoader = (props: PageLoaderProps) => {
  const {children, isLoading} = props;
  return (
    <>
      {isLoading ?
        <Center>
          <Loader />
        </Center>
        : children
      }
    </>
  );
};
