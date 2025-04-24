import { Router } from "express";
import { updateUserControl, updateRoleControl, deactivateUserControl, activateUserControl, getAllUser, userAccount, userProfile,  getAllStaff, getAdmins, getNewUsers, getAllStudents, getAllSecretaries } from "../controls/usersControlB.js"
import { authenticate } from "../middleware/authMiddleware.js"


const userRoute = Router();

userRoute.get('/', getAllUser);

userRoute.get('/', getAllSecretaries);

userRoute.get('/staff', authenticate, getAllStaff);

userRoute.get('/admins', getAdmins);
//userRoute.get('/admin', getAdmin);

userRoute.get('/newusers', authenticate, getNewUsers);

userRoute.get('/students', authenticate, getAllStudents);

userRoute.get('/useracount', authenticate, userAccount);

userRoute.get('/profile', authenticate, userProfile);

userRoute.put('/:userId', updateUserControl);

userRoute.put('/deactivate/:userId', deactivateUserControl);

userRoute.put('/activate/:userId', activateUserControl);

userRoute.put('/role/:userId', updateRoleControl)

export default userRoute;