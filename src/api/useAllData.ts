import {useEffect, useState} from 'react';
import {URL_PATCH} from './consts';
import {Question} from './mockApi';

export const useAllData = (): Question[] => {
  const [cards, setCards] = useState<Question[]>([]);

  useEffect(() => {
    fetch(URL_PATCH, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    }).then((data) => {
      setCards(data);
    });
  }, []);

  return cards;
};
