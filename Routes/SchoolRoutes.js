import express from 'express'
import { addSchool } from '../Controllers/AddSchool.js'
import { ListSchools } from '../Controllers/ListSchool.js'

const app = express.Router()

app.post('/addSchool', addSchool)
app.get('/listSchools', ListSchools)

export default app