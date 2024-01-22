import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { joinWithEmailAndPassword } from '../api/join';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type JoinFormProps = {
  onSuccess: () => void;
};

type JoinValues = {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
};

export const JoinForm = ({ onSuccess }: JoinFormProps) => {
  const [extraError, setExtraError] = useState('');
  return (
    <Form<JoinValues>
      onSubmit={async (values) => {
        console.log(values);
        try {
          const { nickname, email, password, passwordConfirm } = values;
          if (password !== passwordConfirm) {
            setExtraError('비밀번호 확인이 일치하지 않습니다');
            return;
          }
          const result = await joinWithEmailAndPassword({
            nickname,
            email,
            password,
          });
          console.log(result);
          onSuccess();
        } catch (error: any) {
          if (typeof error.message === 'string') {
            setExtraError(error.message);
          }
        }
      }}
    >
      {({ register, formState }) => {
        return (
          <>
            <InputField
              placeholder="닉네임을 입력하세요"
              registration={register('nickname', {
                required: '닉네임을 입력해주세요',
              })}
              error={formState.errors['nickname']}
            />
            <InputField
              placeholder="이메일을 입력하세요"
              type="email"
              registration={register('email', {
                required: '이메일을 입력해주세요',
              })}
              error={formState.errors['email']}
            />
            <InputField
              placeholder="비밀번호를 입력하세요"
              type="password"
              registration={register('password', {
                required: '비밀번호를 입력해주세요',
              })}
              error={formState.errors['password']}
            />
            <InputField
              placeholder="비밀번호를 다시 입력하세요"
              type="password"
              registration={register('passwordConfirm', {
                required: '비밀번호 확인을 입력해주세요',
              })}
              error={formState.errors['passwordConfirm']}
            />
            <span>{extraError}</span>
            <Button type="submit">회원가입</Button>
          </>
        );
      }}
    </Form>
  );
};
