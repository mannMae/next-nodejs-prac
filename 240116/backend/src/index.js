import express from 'express';

const app = express();

const handleListen = () => {
  console.log('Running');
};

app.listen(4000, handleListen);
