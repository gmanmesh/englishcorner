import { updateUserRole, updateUser, deactivateUser, activateUser, getAllUsers, findUserProfileById, getAdmin, getStaff, getStudents, getSecretary, getNewUser } from "../models/userModelB.js";
import { findUserByEmail, findUserByPhone } from "../models/authModelB.js"



export const getAllUser = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};
export const getNewUsers = async (req, res) => {
  try {
    const users = await getNewUser();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};
export const getAllSecretaries = async (req, res) => {
  try {
    const users = await getSecretary();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};
export const getAllStudents = async (req, res) => {
  try {
    const users = await getStudents();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching students' });
  }
};
export const getAllStaff = async (req, res) => {
  try {
    const users = await getStaff();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching staff' });
  }
};
export const getAdmins = async (req, res) => {
  try {
    const users = await getAdmin();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching admin' });
  }
};

export const updateUserControl = async (req, res) => {
  try {

    const { user_name, email, phone } = req.body;
    const { userId } = req.params;


    const existingUserByEmail = await findUserByEmail(email);
    const existingUserByPhone = await findUserByPhone(phone);


    if (existingUserByEmail && existingUserByEmail.id !== parseInt(userId)) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    if (existingUserByPhone && existingUserByPhone.id !== parseInt(userId)) {
      return res.status(400).json({ error: 'Phone number already exists' });
    }


    const inputs = await updateUser(userId, user_name, email, phone);


    if (!inputs) {
      return res.status(404).json({ error: 'User not found or all filled is not filled' });
    }

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

export const updateRoleControl = async (req, res) => {
  try {
    const { role } = req.body;
    const { userId } = req.params
    const success = await updateUserRole(userId, role);
    if (!success) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'Role updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Update failed' });
  }
};

// Controller to deactivate user
export const deactivateUserControl = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await deactivateUser(userId);
    if (result.message === "User not found") {
      return res.status(404).json({ error: result.message });
    }
    res.json({ message: result.message });
  } catch (error) {
    console.error('Error deactivating user:', error);
    res.status(500).json({ error: 'Error deactivating user' });
  }
};

// Controller to activate user
export const activateUserControl = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await activateUser(userId);
    if (result.message === "User not found") {
      return res.status(404).json({ error: result.message });
    }
    res.json({ message: result.message });
  } catch (error) {
    console.error('Error activating user:', error);
    res.status(500).json({ error: 'Error activating user' });
  }
};

export const userAccount = (req, res) => {
  try {
    // `req.user` is populated by the authenticate middleware
    const user = req.user;

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // here we excludeexcluding sensitive information like password
    const { user_id, email, phone, role, created_at, status } = user;
    res.json({
      user: { user_id, email, phone, role, created_at, status }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
}

export const userProfile = async (req, res) => {
  try {
    const user = req.user.user_id;


    const profile = await findUserProfileById(user);

    if (profile.message) {
      return res.status(404).json({ error: profile.message });
    }
    res.json(profile);
  } catch (err) {
    console.error('Error in userProfile:', err);
    res.status(500).json({ error: 'Internal server error' }); // Catch unexpected errors
  }
};

