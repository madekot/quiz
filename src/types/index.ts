export const enum RoutePath {
  MAIN = '/',
  QUIZ = '/quiz',
  QUESTION = '/question',
  QUESTION_LIST = '/question-list',
  ANSWER = '/answer',
  NOT_FOND = '*',
}

export const enum RouteParams {
  ID = '/:id',
}

export interface Question {
  id: number
  question: string
  answer: string
}

