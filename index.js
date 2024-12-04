import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mysql from 'mysql2'
import SchoolRoute from './Routes/SchoolRoutes.js'

const app = express()
dotenv.config()

app.use(bodyParser.json())

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err)=>{
    if(err){
        console.log('An error occurred while connecting to the database:', err)
        return;
    } else{
        console.log("Connection established successfully with the database")
    }
})


app.use('/', SchoolRoute)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log("Server running on Port 5000")
})