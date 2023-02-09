import Api from 'api';
import {useEffect, useState} from 'react';

const api = new Api();
export const useTotalQuestion = () => {
  const [totalQuestion, setTotalQuestion] = useState(0);

  useEffect(() => {
    api.getCountQuestions().then((response) => setTotalQuestion(response));
  }, []);

  return totalQuestion;
};