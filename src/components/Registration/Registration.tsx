import {EntryForm} from 'components/Form/EntryForm';
import {Dispatch, FormEvent, SetStateAction, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {api} from '../../api/cards';
import {KEY, POINT_USERS} from '../../api/consts';
import {FormFields, User} from '../Authorization/Authorization';
import {RoutePath} from '../Router/RouterApp';

export const Registration = () => {
  const navigate = useNavigate();
  const [isUserCreated, setIsUserCreated] = useState<boolean | undefined>();

  useEffect(() => {
    if (!isUserCreated) {
      return;
    }
    navigate(RoutePath.QUESTION_LIST);
  }, [isUserCreated, navigate]);

  const onSubmit = async (
    e: FormEvent<HTMLFormElement & FormFields>,
    setIsUserCreated: Dispatch<SetStateAction<boolean | undefined>>,
  ) => {
    e.preventDefault();

    const login = e.currentTarget.login.value;
    const password = e.currentTarget.password.value;

    const data: User[] = await api.get(`${KEY}${POINT_USERS}?login=${login}`);
    if (data.length !== 0) {
      setIsUserCreated(false);
      return;
    }

    const newUser = {
      login,
      password,
    };

    await api.post(`${KEY}${POINT_USERS}`, newUser);

    setIsUserCreated(true);
  };

  return (
    <EntryForm
      firstButtonText='Зарегестрироваться'
      secondButtonText='У меня есть учетка'
      secondButtonTo={RoutePath.AUTHORIZATION}
      title='Регистрация'
      ErrorMessage='Пользователь с таким именем уже существует'
      isError={isUserCreated === false}
      onSubmit={
        (evt) => {
          onSubmit(evt, setIsUserCreated);
        }}
    />
  );
};
