import {ButtonOptions} from '@chakra-ui/button/dist/button-types';
import {Button} from '@chakra-ui/react';
import {HTMLChakraProps, ThemingProps} from '@chakra-ui/system';

interface MyButtonProps extends HTMLChakraProps<'button'>, ButtonOptions, ThemingProps<'Button'> {
}

export const MyButton = (props: MyButtonProps) => {
  const {children, ...other} = props;
  return (
    <Button size={'lg'} {...other}>{children}</Button>
  );
};
