import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routers/auth'
const app = express()


//middleware 
app.use(express.json())
app.use(cors())
dotenv.config();


app.use('/api', authRouter)



mongoose.connect(process.env.MONGODB_CONNECTION)

export const viteNodeApp = app;