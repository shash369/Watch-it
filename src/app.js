import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';

import userRouter from "./route/user.routes.js"

const app=express();
app.use(cors({
    origin:process.env.CORS_ORG,
    credentials:true,
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(cookieParser()); 


app.use('/api/v1/user',userRouter);

export {app}