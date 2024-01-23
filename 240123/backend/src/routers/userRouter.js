import express from 'express';
import { getMyProfile } from '../controllers/userController';

export const userRouter = express.Router();

userRouter.get('/my-profile', getMyProfile);
