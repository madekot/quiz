import {NavLink} from 'react-router-dom';
import {RoutePath} from 'types';
import css from './Header.module.scss';

const setActive = ({isActive}: {isActive: boolean}): string => {
  return isActive ? css.linkActive : css.link;
};

export const Header = () => {
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
