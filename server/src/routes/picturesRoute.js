import { Router } from 'express';
import { uploadImage, getImages, getImage, updateImageDetails, deleteImageById } from '../controls/pictureController.js';

const images = Router();

// CRUD Routes for image operations
images.post('/upload', uploadImage);      // Upload an image
images.get('/', getImages);               // Get all images
images.get('/:id', getImage);             // Get image by ID
images.put('/:id', updateImageDetails);   // Update image details
images.delete('/:id', deleteImageById);  // Delete image by ID

export default images;
