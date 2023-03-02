import {PageLayout} from 'layout/PageLayout';
import {AnswerPage} from 'pages/AnswerPage';
import {MainMenuPage} from 'pages/MainMenuPage';
import {NotFondPage} from 'pages/NotFondPage';
import {QuestionPage} from 'pages/QuestionPage';
import {QuestionsPage} from 'pages/QuestionsPage';
import {Route, Routes} from 'react-router-dom';

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

export const RouterApp = () => {
  return (
    <Routes>
      <Route path={RoutePath.MAIN} element={<PageLayout/>}>
        <Route index element={<MainMenuPage />} />
        <Route path={RoutePath.ANSWER + RouteParams.ID} element={<AnswerPage />} />
        <Route path={RoutePath.QUESTION_LIST} element={<QuestionsPage />} />
        <Route path={RoutePath.QUESTION + RouteParams.ID} element={<QuestionPage />} />
        <Route path={RoutePath.NOT_FOND} element={<NotFondPage />} />
      </Route>
    </Routes>
  );
};
