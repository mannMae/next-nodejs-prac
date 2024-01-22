import { Wrapper } from './Button.style';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

export const Button = ({ type = 'button', children }: ButtonProps) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};
