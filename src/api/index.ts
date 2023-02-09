import dataMock from 'mock/data.json';
import {Question} from 'types';

const DELAY_TIME = 300;
const IS_MESSAGE_DEBUG = true;

class Api {
  getAll(): Promise<Question[]> {
    IS_MESSAGE_DEBUG && console.log('эмуляция запроса на сервер: все карточки вопросов');
    return (
      new Promise(resolve => {
        setTimeout(
          () => resolve(dataMock.questions),
          DELAY_TIME,
        );
      })
    );
  }

  getItem(id: Question['id']): Promise<Question[]> {
    IS_MESSAGE_DEBUG && console.log('эмуляция запроса на сервер: карточка вопроса');
    return (
      new Promise(resolve => {
        const item = dataMock.questions.find(el => el.id === id) as Question;
        setTimeout(
          () => resolve([item]),
          DELAY_TIME,
        );
      })
    );
  }

  getCountQuestions(): Promise<number> {
    IS_MESSAGE_DEBUG && console.log('эмуляция запроса на сервер: общее количество вопросов');
    return (
      new Promise(resolve => {
        setTimeout(
          () => resolve(dataMock.questions.length),
          DELAY_TIME,
        );
      })
    );
  }
}

export default Api;