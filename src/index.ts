import express  from "express"
import database from './db/connect'

const app = express()
const port = 3000

database()
app.listen(port, () => console.log('💻 listening on port: ', port)) 
