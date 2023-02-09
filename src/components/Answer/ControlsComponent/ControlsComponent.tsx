import css from './ControlsComponent.module.scss';

import {useTotalQuestion} from 'api/useTotalQuestion';
import {MyLink} from 'components/MyLink';
import {useParamsId} from 'hooks/useParamsId';

import {RoutePath} from 'types';

export const ControlsComponent = () => {
  const id = useParamsId();
  const currentQuestion = id;
  const totalQuestions = useTotalQuestion();
  const isLoading = Boolean(totalQuestions);

  return (
    totalQuestions === currentQuestion ? (
      <MyLink
        classNames={css.myLink}
        to={RoutePath.QUESTION_LIST}
        text={'Вернуться к списку вопросов'}
        isLoading={!isLoading}
      />)
      : (
        <MyLink
          classNames={css.myLink}
          to={`${RoutePath.QUESTION}/${id + 1}`}
          text={'Следующий вопрос'}
          isLoading={!isLoading}
        />
      )
  );
};