import {useEffect, useState} from 'react';
import {Question} from './mockApi';

export const useData = (getData: () => Promise<Question[]>) => {
  const [data, setData] = useState<Question[]>([]);

  useEffect(() => {
    getData().then((response) => {
      return setData(response);
    });
  }, [getData]);

  return data;
};
