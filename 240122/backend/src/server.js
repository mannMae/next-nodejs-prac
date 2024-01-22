import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { apiRouter } from './routes/apiRouter';

const app = express();

const handleListening = (portNumber) => {
  console.log(`Running on ${portNumber}port`);
};

const corsOptions = {
  credentials: true,
  allowedHeaders: [
    'authorization',
    'Origin, X-Requested-With, Content-Type, content-type, Accept, Authorization',
  ],
  exposedHeaders: [
    'authorization',
    'Origin, X-Requested-With, Content-Type, content-type, Accept, Authorization',
  ],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.listen(4000, handleListening(4000));

app.use('/api', apiRouter);
