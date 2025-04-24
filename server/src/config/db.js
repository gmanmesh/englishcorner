import mysql from 'mysql2/promise.js';
import env from 'dotenv';

env.config();

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5000,
    waitForConnections: true,
    connectionLimit: 15
});

// Function to test DB connection
const testDbConnection = async () => {
    try {
        // Try getting a connection from the pool
        const connection = await db.getConnection();
        console.log('Database connected on port', process.env.DB_PORT);
        connection.release();
    } catch (err) {
        console.log('Error connecting to the database:', err.message);
    }
};

export default testDbConnection