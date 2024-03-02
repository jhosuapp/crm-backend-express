//Express
import express from 'express';
//Mongo
import mongoose from 'mongoose';
//Routes
import { router } from './routes/index.js';

//Conect mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/crm', {
    useNewUrlParser: true
});


//App
const app = express();

//Routes
app.use('/', router);

//Port
app.listen(5000);