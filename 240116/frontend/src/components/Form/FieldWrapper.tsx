import React from 'react';
import { Error, Label, Wrapper } from './FieldWrapper.style';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  children: React.ReactNode;
  error: Merge<FieldError, FieldErrorsImpl<{}>> | undefined;
};

export type FiledWrapperThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper = ({ label, children, error }: FieldWrapperProps) => {
  return (
    <Wrapper>
      <Label>
        {label} {children}
      </Label>
      {error?.message && <Error>{error.message.toString()}</Error>}
    </Wrapper>
  );
};
