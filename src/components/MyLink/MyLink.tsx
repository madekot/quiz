import {MyButton} from 'components/MyButton';
import {csn} from 'helpers/classNames';
import {Link} from 'react-router-dom';
import css from './MyLink.module.scss';

interface MyLinkProps {
  to: string
  text: string
  classNames?: string
  variant?: 'outline'
  isLoading?: boolean
}
export const MyLink = (props: MyLinkProps) => {
  const {to, text, variant, isLoading, classNames = ''} = props;
  return (
    <Link className={csn(css.myLink, [classNames])} to={to} >
      <MyButton flexGrow={1} variant={variant} isLoading={isLoading}>
        {text}
      </MyButton>
    </Link>
  );
};
