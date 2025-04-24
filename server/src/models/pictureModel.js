import { db } from "../config/db.js";

// Create an image entry in the database
export const createImage = (picture_path, callback) => {
    const sql = "INSERT INTO profile_picture (picture_path) VALUES (?)";
    db.query(sql, [picture_path], callback);
};

// Get all images from the database
export const getAllImages = (callback) => {
    const sql = "SELECT * FROM images";
    db.query(sql, callback);
};

// Get a single image by its ID
export const getImageById = (id, callback) => {
    const sql = "SELECT * FROM images WHERE id = ?";
    db.query(sql, [id], callback);
};

// Update an image's name or path in the database
export const updateImage = (id, name, path, callback) => {
    const sql = "UPDATE images SET name = ?, path = ? WHERE id = ?";
    db.query(sql, [name, path, id], callback);
};

// Delete an image from the database
export const deleteImage = (id, callback) => {
    const sql = "DELETE FROM images WHERE id = ?";
    db.query(sql, [id], callback);
};
