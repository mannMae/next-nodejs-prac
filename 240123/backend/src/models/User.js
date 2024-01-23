import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  password: { type: String },
});

userSchema.pre('save', async function () {
  if (this.isModified()) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

export const userModel = mongoose.model('User', userSchema);
