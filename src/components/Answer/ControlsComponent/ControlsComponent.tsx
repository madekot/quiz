import {useTotalQuestion} from 'api/useTotalQuestion';
import {MyLink} from 'components/MyLink';
import {useParamsId} from 'hooks/useParamsId';

import {RoutePath} from '../../Router/RouterApp';
import css from './ControlsComponent.module.scss';

export const ControlsComponent = () => {
  const id = useParamsId();
  const currentQuestion = id;
  const totalQuestions = useTotalQuestion();

  const text = totalQuestions === currentQuestion
    ? 'Вернуться к списку вопросов'
    : 'Следующий вопрос';

  const to = totalQuestions === currentQuestion
    ? RoutePath.QUESTION_LIST
    : `${RoutePath.QUESTION}/${id + 1}`;

  return (
    <MyLink
      classNames={css.myLink}
      to={to}
      text={text}
    />
  );
};
