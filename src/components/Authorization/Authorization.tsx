import {FormEvent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {KEY_URL} from '../../api/consts';
import {EntryForm} from '../Form/EntryForm';
import {RoutePath} from '../Router/RouterApp';

export type FormFields = {
  login: HTMLInputElement;
  password: HTMLInputElement;
};

export interface Users {
  login: string;
  password: string;
  id: string;
}

export const Authorization = () => {
  const navigate = useNavigate();
  const [authorization, setAuthorization] = useState<boolean>();

  useEffect(() => {
    if (!authorization) {
      return;
    }
    navigate(RoutePath.QUESTION_LIST);
  }, [authorization, navigate]);

  const onSubmit = async (e: FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const login = e.currentTarget.login.value;
    const password = e.currentTarget.password.value;

    const res = await fetch(KEY_URL + '/users');
    const data: Users[] = await res.json();

    const isAuthorization = data.some(el => {
      return el.login === login && el.password === password;
    });

    setAuthorization(isAuthorization);
  };

  return (
    <EntryForm
      firstButtonText='Войти'
      secondButtonText='Регистрация'
      secondButtonTo={RoutePath.REGISTRATION}
      title='Авторизация'
      ErrorMessage={'Неверный логин или пароль'}
      onSubmit={onSubmit}
      isError={authorization === false}
    />
  );
};
