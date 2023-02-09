import Api from 'api';
import {useEffect, useMemo, useState} from 'react';
import {Question} from 'types';

type useItemDataProps = Question['id'];
const api = new Api();

export const useItemData = (id: useItemDataProps) => {
  const [item, setItem] = useState<Question[]>([]);

  useEffect(() => {
    api.getItem(id).then((response) => setItem(response));
  }, []);

  const itemMemo = useMemo(
    () => item[0],
    [id, item],
  );

  return itemMemo;
};