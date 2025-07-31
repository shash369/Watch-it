import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';

const app=express();
app.use(cors({
    origin:process.env.CORS_ORG,
    credentials:true,
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(cookieParser()); 

export {app}