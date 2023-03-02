import {Center} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {Question} from '../../api/mockApi';
import {Loader} from '../Loader';
import {RoutePath} from '../Router/RouterApp';

interface QuestionsListProps {
  data: Question[]
}

export const QuestionsList = ({data}: QuestionsListProps) => {
  return (
    <Center>
      {!data.length &&
        <Loader />
      }
      {Boolean(data.length) &&
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
