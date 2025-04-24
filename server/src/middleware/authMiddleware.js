import jwt from 'jsonwebtoken';
import { findUserById } from '../models/authModelB.js';

export const authenticate = async (req, res, next) => {
  try {
    // Log the incoming token
    /*  console.log('Incoming token:', req.cookies.token); */

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: 'Access denied, no token provided' });
    }

    // Verify the token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      //alert("TOKON VERIFIED!");
      /* console.log('Decoded token:', decoded); */
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expired, please log in again' });
      }
      return res.status(401).json({ error: 'Authentication failed, invalid token' });
    }

    // Fetch user based on the decoded token
    const user = await findUserById(decoded.userId);
    /*  console.log('Fetched user:', user); */

    if (!user) {
      return res.status(401).json({ error: 'Invalid token, user not found' });
    }
    // Attach the user object to the request
    req.user = user;
    next();
  } catch (error) {
    /*  console.error('Authentication error:', error.message); */
    res.status(401).json({ error: 'Authentication failed' });
  }
};