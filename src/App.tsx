import {Layout} from 'components/Layout';
import {AnswerPage} from 'pages/AnswerPage';
import {MainMenuPage} from 'pages/MainMenuPage';
import {NotFondPage} from 'pages/NotFondPage';
import {QuestionPage} from 'pages/QuestionPage';
import {QuestionsPage} from 'pages/QuestionsPage';
import {Route, Routes} from 'react-router-dom';
import {RouteParams, RoutePath} from 'types';

export function App() {
  return (
    <Routes>
      <Route path={RoutePath.MAIN} element={<Layout/>}>
        <Route index element={<MainMenuPage />} />
        <Route path={RoutePath.ANSWER + RouteParams.ID} element={<AnswerPage />} />
        <Route path={RoutePath.QUESTIONS} element={<QuestionsPage />} />
        <Route path={RoutePath.QUESTION_ITEM + RouteParams.ID} element={<QuestionPage />} />
        <Route path={RoutePath.NOT_FOND_PAGE} element={<NotFondPage />} />
      </Route>
    </Routes>
  );
}