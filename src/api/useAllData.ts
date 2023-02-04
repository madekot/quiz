import Api from 'api';
import {useEffect, useMemo, useState} from 'react';
import {Question} from 'types';

const api = new Api();

export const useAllData = () => {
  const [data, setData] = useState<Question[]>([]);

  useEffect(() => {
    api.getAll().then((response) => setData(response));
  }, []);

  const dataMemo = useMemo(
    () => data,
    [data],
  );

  return dataMemo;
};