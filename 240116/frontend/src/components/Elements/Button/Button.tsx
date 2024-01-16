import { Wrapper } from './Button.style';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
};

export const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <Wrapper onClick={onClick} type={type}>
      {children}
    </Wrapper>
  );
};
