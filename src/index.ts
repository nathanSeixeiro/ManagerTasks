import express from "express"
import appConfig from './config/index';

const app = express()
const port = process.env.LOCAL_PORT || 3000

appConfig(app)

app.listen(port, () => console.log('💻 listening on port: ', port)) 
