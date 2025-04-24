import path from 'path';
import fs from 'fs';
import { createImage, getAllImages, getImageById, updateImage, deleteImage } from "../models/pictureModel.js"
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Check if the 'uploads' folder exists
        const uploadPath = './public/uploads/profiles';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);  // Folder to save images
    },
    filename: (req, file, cb) => {
        // Unique filename with timestamp and extension
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});


// Controller for handling image upload
export const uploadImage = (req, res) => {
    console.log('Incoming Request:', req.body);  // Log the body of the request
    console.log('Uploaded File:', req.file);  // Log the file being uploaded

    upload.single('image')(req, res, (err) => {
        if (err) {
            console.error('Multer error:', err);  // Log the error from Multer
            return res.status(500).send('Error uploading the image');
        }

        // Check if file exists
        if (!req.file) {
            console.log('No file uploaded');  // Log if there's no file uploaded
            return res.status(400).send('No file uploaded');
        }

        console.log('File uploaded successfully:', req.file);  // Log the uploaded file details

        const { filename, mimetype, path: filepath } = req.file;

        // Save the image metadata to the database
        createImage(filename, filepath, (err, result) => {
            if (err) {
                console.error('Database error:', err);  // Log database errors
                return res.status(500).send('Error saving to the database');
            }
            res.status(200).send('Image uploaded successfully');
        });
    });
};


// Get all images
export const getImages = (req, res) => {
    getAllImages((err, results) => {
        if (err) return res.status(500).send('Error retrieving images');
        res.status(200).json(results);
    });
};

// Get an image by ID
export const getImage = (req, res) => {
    const { id } = req.params;
    getImageById(id, (err, result) => {
        if (err) return res.status(500).send('Error retrieving the image');
        if (result.length === 0) return res.status(404).send('Image not found');
        res.status(200).json(result[0]);
    });
};

// Update an image's information
export const updateImageDetails = (req, res) => {
    const { id } = req.params;
    const { name, path } = req.body;

    updateImage(id, name, path, (err, result) => {
        if (err) return res.status(500).send('Error updating the image');
        res.status(200).send('Image updated successfully');
    });
};

// Delete an image
export const deleteImageById = (req, res) => {
    const { id } = req.params;
    getImageById(id, (err, result) => {
        if (err) return res.status(500).send('Error retrieving the image');
        if (result.length === 0) return res.status(404).send('Image not found');

        const imagePath = result[0].path;
        fs.unlink(path.join(__dirname, '../../public', imagePath), (err) => {
            if (err) console.log('Error deleting image file:', err);
        });

        deleteImage(id, (err, result) => {
            if (err) return res.status(500).send('Error deleting the image from the database');
            res.status(200).send('Image deleted successfully');
        });
    });
};
