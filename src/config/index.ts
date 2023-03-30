import {Express } from 'express'

import database from '../db/connect'
import appMiddleware from './middleware/index';


export default function appConfig(app: Express):void {
    database()
    appMiddleware(app)
}