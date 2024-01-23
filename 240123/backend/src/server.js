import './db';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { rootRouter } from './routers/rootRouter';

const app = express();

const corsOptions = {
  credentials: true,
  allowedHeaders: [
    'authorization',
    'Origin, X-Requested-With, Content-Type, content-type, Accept, Authorization, refreshtoken, useruuid',
  ],
  exposedHeaders: [
    'authorization',
    'Origin, X-Requested-With, Content-Type, content-type, Accept, Authorization, refreshtoken, useruuid',
  ],
};

app.use(
  session({
    secret: 'mannmae',
    // secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000,
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/devlink' }),
    // store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(4000, () => console.log('App is running on 4000 port'));

app.use('/api', rootRouter);
