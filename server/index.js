import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import testDbConnection from './src/config/db.js';
import allRoutes from './src/routes/allRoutes.js';
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from 'url';

env.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const prodOrigins = [process.env.ORIGIN_1, process.env.ORIGIN_2]
const devOrigin  = ["http://localhost:5173",]
const allowedOrigins = process.env.NODE_ENV === 'production'? prodOrigins:devOrigin

app.use(cors({
    //origin: "http://localhost:5173",
    origin: (origin,callback) =>{
        if(allowedOrigin.includes(origin)){
            console.log(origin,allowedOrigins)
            callback(null,true)
        }else{
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
    methods:["GET","POST","PUT","DELETE"],
})); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//static path
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
//routes 
app.use("/api", allRoutes);

//database connection
testDbConnection()

app.use((err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(500).json({ message: 'Something went wrong on the server.' });
});


const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})