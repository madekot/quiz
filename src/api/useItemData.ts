import {useEffect, useState} from 'react';
import {getCard} from './cards';
import {Question} from './mockApi';

type useItemDataProps = Question['id'];

export const useItemData = (id: useItemDataProps) => {
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    getCard(id).then((data) => {
      setQuestion(data);
    });
  }, [id]);

  return question;
};
