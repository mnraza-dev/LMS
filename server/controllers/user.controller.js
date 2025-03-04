import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({
        message: 'All fields are required',
        success: false,
      });
    if (!password || password.length < 6) {
      return res
        .status(400)
        .json('Password is required and should be a minimum of 6 characters');
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: 'Email is already exists ❌',
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      return res.status(201).json({
        message: 'User created successfully 🎉',
        success: true,
        user,
      });
    }
  } catch (error) {}
};
