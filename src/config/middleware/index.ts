import express, { Express } from "express";
import { router } from './../../routes/taskRoutes';

export default function appMiddleware(app: Express) {
    app.use(express.json())
    app.use(router)
}