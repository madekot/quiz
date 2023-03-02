import {useEffect, useState} from 'react';

import {URL_PATCH} from './consts';
import {Question} from './mockApi';

type useItemDataProps = Question['id'];

export const useItemData = (id: useItemDataProps) => {
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    fetch(URL_PATCH + `/${id}`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then((res) => {
      if (res.ok) {
        return (
          res.json()
        );
      }
    }).then((data) => {
      setQuestion(data);
    });
  }, [id]);

  return question;
};
