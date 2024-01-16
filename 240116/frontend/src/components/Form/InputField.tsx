import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FiledWrapperThroughProps } from './FieldWrapper';
import { Input } from './InputField.style';

type InputFieldProps = FiledWrapperThroughProps & {
  type?: 'email' | 'text' | 'password';
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = ({
  label,
  error,
  type,
  placeholder,
  registration,
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <Input type={type} placeholder={placeholder} {...registration} />
    </FieldWrapper>
  );
};
