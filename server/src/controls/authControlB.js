import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { findUserByEmail, findUserByPhone, createUser } from "../models/authModelB.js"


export const register = async (req, res) => {
  try {
    const { user_name, email, user_password, phone, gender } = req.body;
    const hashPassword = await bcrypt.hash(user_password, 10)

    const userID = await createUser({
      user_name,
      email,
      user_password: hashPassword,
      phone,
      gender

    })
    res.status(201).json(userID)
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
};



export const login = async (req, res) => {
  try {
    const { email, user_password, phone } = req.body;

    // Find user by email or phone
    let user;
    if (email) {
      user = await findUserByEmail(email);
    } else if (phone) {
      user = await findUserByPhone(phone);
    }


    if (!user) {
      return res.json({ message: 'Invalid email/phone or password' });
    }

    if (user.acc_status === "inactive") {
      return res.json({ message: 'Your account has been disabled' });
    }

    const isPasswordValid = await bcrypt.compare(user_password, user.user_password);
    if (!isPasswordValid) {
      return res.json({ message: 'Invalid password' });
    }


    const token = jwt.sign({ userId: user.user_id, acc_role: user.acc_role }, process.env.JWT_SECRET, { expiresIn: '1h' });


    res.cookie('token', token, {
      httpOnly: true,
      ////secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    res.json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed, please try again' });
  }
};




export const logout = (req, res) => {
  try {

    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });


    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Logout failed, please try again' });
  }
};
