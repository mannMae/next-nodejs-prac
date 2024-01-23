import express from 'express';
import { authRouter } from './authRouter';
import { userRouter } from './userRouter';

export const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/user', userRouter);
