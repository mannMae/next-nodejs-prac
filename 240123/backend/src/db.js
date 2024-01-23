import mongoose from 'mongoose';

// mongoose.connect(process.env.DB_URL);
mongoose.connect('mongodb://127.0.0.1:27017/devlink');

const db = mongoose.connection;

const handleOpen = () => console.log('DB Open');

db.once('open', handleOpen);

db.on('error', (error) => console.error(error));
