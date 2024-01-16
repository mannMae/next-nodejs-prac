import { axios } from '@/libraries/axios';

type JoinProps = {
  email: string;
  nickname: string;
  password: string;
};

export const join = ({ email, nickname, password }: JoinProps) => {
  return axios.post('/api/auth/join', { email, nickname, password });
};
