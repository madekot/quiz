import {useEffect, useState} from 'react';
import {getCards} from './cards';
import {Question} from './mockApi';

export const useAllData = (): Question[] => {
  const [cards, setCards] = useState<Question[]>([]);

  useEffect(() => {
    getCards().then((data) => {
      setCards(data);
    });
  }, []);

  return cards;
};
