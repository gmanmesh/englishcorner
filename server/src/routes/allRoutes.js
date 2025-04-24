import { Router } from "express";
import authRoute from "./authRoutesB.js"
import userRoute from "./userRouteB.js"
import userProfileRoute from "./userProfileRouteB.js"
import router from "./picturesRoute.js";
import blogs from "./blogRoutes.js";
import examsRoute from "./examsRoutesB.js";
import images from "./picturesRoute.js";





const allRoutes = Router();

allRoutes.use("/auth", authRoute);
allRoutes.use("/profile", userProfileRoute);
allRoutes.use("/user", userRoute);
allRoutes.use("/secretary", userRoute);

allRoutes.use("/blogs", blogs);
allRoutes.use("/exams", examsRoute);
allRoutes.use("/", images);


allRoutes.use('/picture', router)








export default allRoutes




