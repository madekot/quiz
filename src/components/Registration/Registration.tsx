import {EntryForm} from 'components/Form/EntryForm';
import {FormEvent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {KEY_URL} from '../../api/consts';
import {FormFields, Users} from '../Authorization/Authorization';
import {RoutePath} from '../Router/RouterApp';

export const Registration = () => {
  const navigate = useNavigate();
  const [isUserCreated, setIsUserCreated] = useState<boolean>();

  useEffect(() => {
    if (!isUserCreated) {
      return;
    }
    navigate(RoutePath.QUESTION_LIST);
  }, [isUserCreated, navigate]);

  const onSubmit = async (e: FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();

    const login = e.currentTarget.login.value;
    const password = e.currentTarget.password.value;

    const res = await fetch(`${KEY_URL}/users?login=${login}`);
    const data: Users[] = await res.json();
    if (data.length !== 0) {
      setIsUserCreated(false);
      return;
    }

    const newUser = {
      login,
      password,
    };

    await fetch(KEY_URL + '/users', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(newUser),
    });

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
      onSubmit={onSubmit}/>
  );
};
