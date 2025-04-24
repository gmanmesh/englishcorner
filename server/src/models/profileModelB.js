import { db } from "../config/db.js"


export const createUserProfile = async (userId, first_name, fathers_name, profession, address) => {
  try {
    // Insert the new profile into the database
    const [result] = await db.query(
      'INSERT INTO profile (user_id, first_name, fathers_name, profession,  address) VALUES (?, ?, ?, ?, ?)',
      [userId, first_name, fathers_name, profession, address]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Database insertion failed:', error);
    throw error;
  }
};


export const findUserProfileById = async (userId) => {
  try {

    const [rows] = await db.query('SELECT * FROM profile WHERE user_id = ?', [userId]);
    return rows[0]; // Return the profile or undefined if not found
  } catch (error) {
    console.error('Error finding user profile:', error);
    throw error;
  }
};


export const updateUserProfile = async (userId, first_name, fathers_name, profession, address) => {
  try {

    const [result] = await db.query(
      'UPDATE profile SET first_name = ?, fathers_name = ?, profession = ?, address = ? WHERE user_id = ?',
      [first_name, fathers_name, profession, userId]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Database update failed:', error);
    throw error;
  }
};



