import {
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>
>({
  onSubmit,
  children,
  options,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ ...options });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
