const express = require('express');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');
const { getAllUsers, updateUserRole } = require('../controls/AdminController');
const router = express.Router();

router.get('/users', authenticate, isAdmin, getAllUsers);
//router.get('/admin', authenticate, true, getAllUsers);
router.put('/users/:id/role', authenticate, isAdmin, updateUserRole);

