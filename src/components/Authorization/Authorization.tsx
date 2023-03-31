import {Dispatch, FormEvent, SetStateAction, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getUsers} from '../../api/cards';
import {EntryForm} from '../Form/EntryForm';
import {RoutePath} from '../Router/RouterApp';

export type FormFields = {
  login: HTMLInputElement;
  password: HTMLInputElement;
};

export interface User {
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

  const onSubmit = async (
    e: FormEvent<HTMLFormElement & FormFields>,
    setAuthorization: Dispatch<SetStateAction<boolean | undefined>>,
  ) => {
    e.preventDefault();
    const login = e.currentTarget.login.value;
    const password = e.currentTarget.password.value;

    const data: User[] = await getUsers();

    const isAuthorization = data.some(el => {
      return el.login === login && el.password === password;
    });

    setAuthorization(isAuthorization);

    // TODO: переделать авторизацию, когда появится свой сервер
  };

  return (
    <EntryForm
      firstButtonText='Войти'
      secondButtonText='Регистрация'
      secondButtonTo={RoutePath.REGISTRATION}
      title='Авторизация'
      ErrorMessage={'Неверный логин или пароль'}
      onSubmit={(evt) => {
        onSubmit(evt, setAuthorization);
      }}
      isError={authorization === false}
    />
  );
};
