import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
  } catch (error) {
    console.log(' Error while registering user ❌ ', error);

    return res.status(500).json({
      message: 'Failed to register user ❌',
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields are required to login',
        success: false,
      });
    }
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({
        message: 'Incorrect email and password ❌',
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: 'Incorrect email and password ❌',
        success: false,
      });
    }



  } catch (error) {
    console.log(' Error while log in user ❌ ', error);

    return res.status(500).json({
      message: 'Failed to log in user ❌',
      success: false,
    });
  }
};
export const logout = async (req, res) => {};
