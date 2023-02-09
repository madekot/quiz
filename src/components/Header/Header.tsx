import css from './Header.module.scss';

import {useCallback} from 'react';
import {NavLink, useMatch} from 'react-router-dom';
import {RoutePath} from 'types';

export const Header = () => {
  const setActive = useCallback(
    ({isActive}: {isActive: boolean}): string => {
      return isActive ? css.linkActive : css.link;
    },
    [],
  );

  return (
    <header className={css.header}>
      <NavLink to={RoutePath.MAIN} className={setActive}>
        Главная
      </NavLink>
      <NavLink to={RoutePath.QUESTION_LIST} className={setActive}>
        Вопросы
      </NavLink>
    </header>
  );
};
