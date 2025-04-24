import { updateUserRole } from "../models/userModelB.js"



export const updateUsersRole = async (req, res) => {
  try {
    const { id, role } = req.body;
    const success = await updateUserRole(id, role);
    if (!success) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'Role updated successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Update failed' });
  }
};