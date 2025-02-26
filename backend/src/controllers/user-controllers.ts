import { NextFunction, Request, Response } from 'express';
import User from '../models/User.js';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  // get all users from the database
  try {
    const users = await User.find();
    return res.status(200).json({ message: 'OK', users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error', cause: error.message });
  }
};
