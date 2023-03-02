import {useAllData} from './useAllData';

export const useTotalQuestion = () => {
  const questions = useAllData();
  return questions.length;
};
