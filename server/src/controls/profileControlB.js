import { findUserProfileById, createUserProfile, updateUserProfile } from '../models/profileModelB.js';


export const updateUserProfileControl = async (req, res) => {
  try {
    const { first_name, fathers_name, profession, address } = req.body;
    const { userId } = req.params;

    // Check if profile exists for the user
    const existingProfile = await findUserProfileById(userId);

    if (existingProfile) {
      // If profile exists, update the profile
      const success = await updateUserProfile(userId, first_name, fathers_name, profession, address);
      if (!success) {
        return res.status(404).json({ error: 'Failed to update profile' });
      }
      res.json({ message: 'Profile updated successfully' });
    } else {
      // If profile doesn't exist, create a new profile
      const success = await createUserProfile(userId, first_name, fathers_name, profession, address);
      if (!success) {
        return res.status(400).json({ error: 'Failed to create profile' });
      }
      res.json({ message: 'Profile created successfully' });
    }
  } catch (error) {
    console.error('Error creating/updating profile:', error);
    res.status(500).json({ error: 'An error occurred while creating or updating the profile' });
  }
};
