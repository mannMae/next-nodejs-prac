import { userModel } from '../models/User';

export const getMyProfile = async (request, response) => {
  console.log(request.header);
  const userUuid = request.headers.useruuid;
  console.log(userUuid);
  const profile = await userModel.findOne({ _id: userUuid });
  const { _id, email, nickname } = profile;
  return response.status(200).send({ email, nickname });
};
