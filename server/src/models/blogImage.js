import { db } from "../config/db.js";

// Save image metadata to the database
export const saveImage = (blog_pictures, blog_id, callback) => {
    const query = 'INSERT INTO blog_picture (blog_pictures, blog_id) VALUES (?, ?)';
    db.query(query, [blog_pictures, blog_id], (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};
// Retrieve all images from the database
export const getAllImages = (callback) => {
    const query = 'SELECT * FROM images';
    db.query(query, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};
