import express from 'express';
import { router } from './routes/index.js';

//App
const app = express();

//Routes
app.use('/', router);

//Port
app.listen(5000);