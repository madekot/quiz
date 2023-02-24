import {Center} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import {Loader} from 'components/Loader';
import {Link} from 'react-router-dom';
import {RoutePath, Question} from 'types';

interface QuestionsListProps {
  data: Question[]
}

export const QuestionsList = ({data}: QuestionsListProps) => {
  return (
    <Center>
      {!data.length &&
        <Loader />
      }
      {data.length &&
        <ol>
          {data.map((el, index) => {
            return (
              <li key={index}>
                <Link to={RoutePath.QUESTION + `/${el.id}`}>
                  <Text fontSize={'xl'}>{el.question}</Text>
                </Link>
              </li>
            );
          })}
        </ol>
      }
    </Center>
  );
};
