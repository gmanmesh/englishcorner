import { register, login, logout } from "../controls/authControlB.js"
import { Router } from "express";

const authRoute = Router()

authRoute.post('/register', register);
authRoute.post('/login', login);
authRoute.post('/logout', logout);

export default authRoute;