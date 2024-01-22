import express from 'express';
import { join, login } from '../controllers/authController';

export const authRouter = express.Router();

authRouter.get('/', () => console.log('Auth'));

authRouter.route('/join').post(join);
authRouter.route('/login').post(login);
