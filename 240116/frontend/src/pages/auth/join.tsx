import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { join } from '@/features/auth';

export default function Join() {
  const handleSubmit = async (values: any) => {
    console.log('Submit');
    console.log(values);
    const { email, nickname, password, passwordConfirm } = values;
    try {
      const result = await join({ email, nickname, password });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <>
          <InputField
            label="이메일"
            placeholder="이메일을 입력하세요"
            registration={register('email')}
            error={formState.errors['email']}
            type="email"
          />
          <InputField
            label="닉네임"
            placeholder="닉네임을 입력하세요"
            registration={register('nickname')}
            error={formState.errors['nickname']}
            type="text"
          />
          <InputField
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            registration={register('password')}
            error={formState.errors['password']}
            type="password"
          />
          <InputField
            label="비밀번호 확인"
            placeholder="비밀번호와 똑같이 입력하세요"
            registration={register('passwordConfirm')}
            error={formState.errors['passwordConfirm']}
            type="password"
          />
          <Button type="submit">가입하기</Button>
          <Button type="reset">취소하기</Button>
        </>
      )}
    </Form>
  );
}
