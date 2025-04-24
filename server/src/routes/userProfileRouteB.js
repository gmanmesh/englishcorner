

import { Router } from "express";
import { updateUserProfileControl } from "../controls/profileControlB.js";


const userProfileRoute = Router();

userProfileRoute.put('/:userId', updateUserProfileControl);

export default userProfileRoute;

