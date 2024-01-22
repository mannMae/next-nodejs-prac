import { UseFormRegisterReturn } from 'react-hook-form';
import { Input } from './InputField.style';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  registration: UseFormRegisterReturn;
};

export const InputField = ({
  label,
  type,
  placeholder,
  registration,
  error,
}: InputFieldProps) => {
  return (
    <FieldWrapper error={error} label={label}>
      <Input type={type} placeholder={placeholder} {...registration} />
    </FieldWrapper>
  );
};
