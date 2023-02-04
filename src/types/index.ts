export const enum RoutePath {
  MAIN = '/',
  QUIZ = '/quiz',
  QUESTION_ITEM = '/question',
  QUESTIONS= '/questions',
  ANSWER = '/answer',
  NOT_FOND_PAGE = '*',
}

export const enum RouteParams {
  ID = '/:id',
}

export interface Question {
  id: number
  question: string
  answer: string
}

