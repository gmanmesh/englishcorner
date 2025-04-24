import { db } from "../config/db.js"

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

export const createUser = async ({ user_name, email, user_password, phone, gender }) => {
    try {
        // If the email is provided, check if it already exists
        if (email) {
            const [existingEmail] = await db.query("SELECT email FROM users WHERE email = ?", [email]);

            if (existingEmail.length > 0) {
                // If the email already exists, return a message
                return { message: "Email already exists" };
            }
        }

        // If the phone is provided, check if it already exists
        if (phone) {
            const [existingPhone] = await db.query("SELECT phone FROM users WHERE phone = ?", [phone]);

            if (existingPhone.length > 0) {
                // If the phone already exists, return a message
                return { message: "Phone already exists" };
            }
        }

        // If email does not exist, insert the new user
        const [result] = await db.query("INSERT INTO users (user_name, email, user_password, phone, gender) VALUES (?,?,?,?,?)",
            [user_name, email, user_password, phone, gender]);

        // Return the inserted user's ID
        return {
            userId: result.insertId,
            message: "registered"
        };

    } catch (err) {
        // Return a properly formatted error message
        return { message: "Server error", error: err };
    }
};
//find users by email
export const findUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};
//find users by phone 
export const findUserByPhone = async (phone) => {
    const [rows] = await db.query('SELECT * FROM users WHERE phone = ?', [phone]);
    return rows[0];
};
//get user by id
export const findUserById = async (userId) => {
    const [rows] = await db.query(fetchProfileByID, [userId]);
    return rows[0];
};



