import {Question} from 'types';
import {loggerMessage, LoggerMessageType} from '../helpers/loggerMessage';
import dataMock from '../mock/data.json';

const DELAY_TIME = 300;

export const getAll = (): Promise<Question[]> => {
  loggerMessage(LoggerMessageType.ALL_CARDS);

  return (
    new Promise(resolve => {
      setTimeout(
        () => {
          return resolve(dataMock.questions);
        },
        DELAY_TIME,
      );
    })
  );
};

export const getItem = (id: Question['id']): Promise<Question[]> => {
  loggerMessage(LoggerMessageType.QUESTION_CARD);

  return (
    new Promise(resolve => {
      const item = dataMock.questions.find(el => {
        return el.id === id;
      }) as Question;
      setTimeout(
        () => {
          return resolve([item]);
        },
        DELAY_TIME,
      );
    })
  );
};

export const getCountQuestions = (): Promise<number> => {
  loggerMessage(LoggerMessageType.NUMBER_QUESTIONS);

  return (
    new Promise(resolve => {
      setTimeout(
        () => {
          return resolve(dataMock.questions.length);
        },
        DELAY_TIME,
      );
    })
  );
};
