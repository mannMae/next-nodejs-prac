import express from 'express';
import { join, login } from '../controllers/authController';

export const authRouter = express.Router();

authRouter.post('/join', join);
authRouter.post('/login', login);
