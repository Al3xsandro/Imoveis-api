// Modules
import express from 'express';
import cors from 'cors';
import { routes } from './routes';

import { Request, Response} from 'express';

// Initialize
import './database/index'
import 'reflect-metadata';
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.get('/', (req: Request, res: Response) => {
    return res.status(200).send({
        title: 'imoveis api',
        version: '1.0'
    });
});

app.use(routes)


export { app }