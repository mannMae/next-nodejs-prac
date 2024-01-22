import { FieldError } from 'react-hook-form';
import { Error, Label, Wrapper } from './FieldWrapper.style';

type FieldWrapperProps = {
  label?: string;
  error?: FieldError;
  children: React.ReactNode;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper = ({ label, error, children }: FieldWrapperProps) => {
  return (
    <Wrapper>
      <Label>
        {label}
        {children}
      </Label>
      {error && <Error>{error.message}</Error>}
    </Wrapper>
  );
};
