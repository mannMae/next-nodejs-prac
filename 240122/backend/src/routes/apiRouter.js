import express from 'express';
import { authRouter } from './authRouter';

export const apiRouter = express.Router();

apiRouter.get('/', () => console.log('API'));

apiRouter.use('/auth', authRouter);
