import {useAllData} from './useAllData';

import {useMemo} from 'react';
import {Question} from 'types';

type useItemDataProps = Question['id'];

export const useItemData = (id: useItemDataProps) => {
  const data = useAllData();

  const itemMemo = useMemo(
    () => data.find(el => el.id === id),
    [id, data],
  );

  return {item: itemMemo, data};
};