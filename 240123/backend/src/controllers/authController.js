import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userModel } from '../models/User';

export const join = async (request, response) => {
  const { nickname, email, password } = request.body;
  try {
    const result = await userModel.create({ nickname, email, password });
    console.log(result);
    return response.status(200).send(result);
  } catch (error) {
    console.error(error);
    return response
      .status(400)
      .send({ errorMessage: 'This username or email is already taken.' });
  }
};

export const login = async (request, response) => {
  const { email, password } = request.body;
  const user = await userModel.findOne({ email });

  const userCheck = bcrypt.compare(password, user.password);

  if (!userCheck) {
    return response.status(400).send({ errorMessage: 'Wrong password' });
  }
  console.log(user);
  const accessToken = jwt.sign(
    user._id.toHexString(),
    'mannmae'
    // { expiresIn: '1h' },
    // (err, token) => {
    //   if (err) throw err;
    //   accessToken = token;
    // }
  );
  console.log(jwt);
  return response.status(200).send({
    userUuid: user._id,
    email: user.email,
    nickname: user.nickname,
    accessToken,
  });
};
