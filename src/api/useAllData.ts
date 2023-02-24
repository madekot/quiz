import {useData} from './useData';
import {getAll} from './index';

export const useAllData = () => {
  return useData(getAll);
};
