import express from 'express';
//Router
const router = express.Router();

//Routes
router.get('/', (req, res)=>{
    res.send('inicio');
});

export { router }