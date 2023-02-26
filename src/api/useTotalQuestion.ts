import {useEffect, useState} from 'react';
import {getCountQuestions} from './index';

export const useTotalQuestion = () => {
  const [totalQuestion, setTotalQuestion] = useState(0);

  useEffect(() => {
    getCountQuestions().then((response) => {
      return setTotalQuestion(response);
    });
  }, []);

  return totalQuestion;
};
