const IS_MESSAGE_DEBUG = false;

export enum LoggerMessageType {
  ALL_CARDS = 'allCards',
  QUESTION_CARD = 'questionCard',
  NUMBER_QUESTIONS = 'numberQuestions',
}

export const loggerMessage = (type: LoggerMessageType) => {
  if (!IS_MESSAGE_DEBUG) {
    return;
  }

  switch (type) {
  case LoggerMessageType.ALL_CARDS:
    // eslint-disable-next-line no-console
    console.log('эмуляция запроса на сервер: все карточки вопросов');
    break;
  case LoggerMessageType.QUESTION_CARD:
    // eslint-disable-next-line no-console
    console.log('эмуляция запроса на сервер: карточка вопроса');
    break;
  case LoggerMessageType.NUMBER_QUESTIONS:
    // eslint-disable-next-line no-console
    console.log('эмуляция запроса на сервер: общее количество вопросов');
    break;
  }
};
