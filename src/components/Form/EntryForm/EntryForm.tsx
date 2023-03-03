import {Heading, Input, Text} from '@chakra-ui/react';
import React, {FormEvent} from 'react';
import {MyButton} from '../../MyButton';
import {MyLink} from '../../MyLink';
import {RoutePath} from '../../Router/RouterApp';
import css from './EntryForm.module.scss';

type FormFields = {
  login: HTMLInputElement;
  password: HTMLInputElement;
};

interface EntryFormProps {
  title: string;
  onSubmit?: (e: FormEvent<HTMLFormElement & FormFields>) => void;
  firstButtonText: string;
  secondButtonText: string;
  secondButtonTo: RoutePath;
  isError?: boolean;
  ErrorMessage: string;
}

export const EntryForm = (props: EntryFormProps) => {
  const {
    title,
    firstButtonText,
    secondButtonText,
    secondButtonTo,
    isError,
    ErrorMessage,
    onSubmit,
  } = props;

  return (
    <div className={css.EntryForm}>
      <Heading
        fontSize={'4xl'}
        color='green.400'
        textAlign='center'
      >
        {title}
      </Heading>
      <form
        className={css.form}
        onSubmit={(e: FormEvent<HTMLFormElement & FormFields>) => {
          onSubmit?.(e);
        }}
      >
        <div className={css.formFields}>
          <Input type='text' placeholder='Login' name='login' required />
          <Input type='password' placeholder='Password' name='password' required />
        </div>
        {isError &&
          <Text fontSize='xl' color='red' textAlign='center'>{ErrorMessage}</Text>
        }
        <div className={css.formControls}>
          <MyButton type='submit'>{firstButtonText}</MyButton>
          <MyLink
            classNames={css.myLink}
            to={secondButtonTo}
            text={secondButtonText}
            variant='outline'
          />
        </div>
      </form>
    </div>
  );
};
