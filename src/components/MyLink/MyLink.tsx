import css from './MyLink.module.scss';

import {MyButton} from 'components/MyButton';
import {csn} from 'helpers/classNames';
import {Link} from 'react-router-dom';

interface MyLinkProps {
  to: string
  text: string
  classNames?: string
  variant?: 'outline'
}
export const MyLink = (props: MyLinkProps) => {
  const {to, text, variant, classNames = ''} = props;
  return (
    <Link className={csn(css.myLink, [classNames])} to={to} >
      <MyButton flexGrow={1} variant={variant}>
        {text}
      </MyButton>
    </Link>
  );
};
