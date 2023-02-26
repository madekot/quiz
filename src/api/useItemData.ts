import {Question} from 'types';
import {useData} from './useData';
import {getItem} from './index';

type useItemDataProps = Question['id'];

export const useItemData = (id: useItemDataProps) => {
  return useData(() => {
    return getItem(id);
  })[0];
};
