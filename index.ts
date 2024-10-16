import express, { Application } from "express"
import dotenv from "dotenv"
import cors from "cors"

import apiRoutes from './routes/api'

import connectDB from "./libs/db"

const app: Application = express()

dotenv.config()
connectDB()

const PORT = process.env.PORT || 3005

app.use(cors())
app.use(express.json())

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server started on PORT:: ${PORT}`)
})