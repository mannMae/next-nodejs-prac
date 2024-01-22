import { axios } from '@/libraries/axios';

type JoinCredentialsDTO = {
  email: string;
  nickname: string;
  password: string;
};

export const joinWithEmailAndPassword = (values: JoinCredentialsDTO) => {
  return axios.post('/auth/join', values);
};
