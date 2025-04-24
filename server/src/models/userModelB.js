import { db } from "../config/db.js"

const allQuery = "SELECT * FROM users"
const updateRole = 'UPDATE users SET role = ? WHERE user_id = ?';
const updateUserbyId = 'UPDATE users SET user_name = ?, email = ?, phone = ? WHERE user_id = ?'
const fetchProfileByID = `
        SELECT  users.user_id,
                users.user_name,
                users.email,
                users.phone,
                users.acc_status,
                users.acc_role,
                users.gender,
                COALESCE(profile.first_name, '') AS first_name,
                COALESCE(profile.fathers_name, '') AS fathers_name,
                COALESCE(profile.profession, '') AS profession,
                COALESCE(profile.status, '') AS status,

                users.created_at
        FROM users 
        LEFT JOIN profile ON users.user_id = profile.user_id
        WHERE users.user_id = ?`;
        
const fetchProfileByRole = `
        SELECT  users.user_id,
                users.user_name,
                users.email,
                users.phone,
                users.acc_status,
                users.acc_role,
                users.gender,
                COALESCE(profile.first_name, '') AS first_name,
                COALESCE(profile.fathers_name, '') AS fathers_name,
                COALESCE(profile.profession, '') AS profession,
                COALESCE(profile.status, '') AS status,

                users.created_at
        FROM users 
        LEFT JOIN profile ON users.user_id = profile.user_id
        WHERE users.acc_role = ?`;


// Get all users
export const getAllUsers = async () => {
  try {
    const [rows] = await db.query(allQuery);
    return rows;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};
//new user
export const getNewUser = async () => {
  try {
    const [rows] = await db.query(fetchProfileByRole, ['user']);
    return rows;
  } catch (error) {
    console.error('Error fetching users with role "user":', error);
    throw error;
  }
};
//get All Staff
export const getStaff = async () => {
  try {
    const [rows] = await db.query(fetchProfileByRole, ['staff']);
    return rows;
  } catch (error) {
    console.error('Error fetching users with role "staff":', error);
    throw error;
  }
};
//get All Staff
export const getSecretary = async () => {
  try {
    const [rows] = await db.query(fetchProfileByRole, ['secretary']);
    return rows;
  } catch (error) {
    console.error('Error fetching users with role "secretary":', error);
    throw error;
  }
};
//get All Students
export const getStudents = async () => {
  try {
    const [rows] = await db.query(fetchProfileByRole, ['student']);
    return rows;
  } catch (error) {
    console.error('Error fetching users with role "students":', error);
    throw error;
  }
};
//get All Admin
export const getAdmin = async () => {
  try {
    const [rows] = await db.query(fetchProfileByRole, ['admin']);
    return rows;
  } catch (error) {
    console.error('Error fetching users with role "admin":', error);
    throw error;
  }
};



export const updateUserRole = async (userId, role) => {
  const [result] = await db.query(updateRole, [role, userId]);
  return result.affectedRows > 0;
};


export const updateUser = async (userId, user_name, email, phone) => {
  try {

    const [result] = await db.query(updateUserbyId, [user_name, email, phone, userId]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Database update failed:', error);
    throw error;
  }
};

export const deactivateUser = async (userId) => {
  try {
    // Update user status to 'inactive'
    const query = "UPDATE users SET status = 'inactive' WHERE id = ?";
    const [result] = await db.query(query, [userId]);

    if (result.affectedRows === 0) {
      return { message: "User not found" };
    }

    return { message: "User successfully deactivated" };
  } catch (err) {
    return { message: "Database error", error: err };
  }
};

export const activateUser = async (userId) => {
  try {
    // Update user status to 'active'
    const query = "UPDATE users SET status = 'active' WHERE id = ?";
    const [result] = await db.query(query, [userId]);

    if (result.affectedRows === 0) {
      return { message: "User not found" };
    }

    return { message: "User successfully activated" };
  } catch (err) {
    return { message: "Database error", error: err };
  }
};

export const findUserProfileById = async (userId) => {
  try {


    // Execute the query with the userId parameter
    const [rows] = await db.query(fetchProfileByID, [userId]);

    if (rows.length === 0) {
      return { message: "User not found" };
    }

    return rows[0];
  } catch (err) {
    console.error('Database error:', err);
    return { message: "Database error", error: err };
  }
};

