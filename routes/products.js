const express = require('express');

const ProductService = require('./../services/products');

const router = express.Router();
const service = new ProductService();

router.get('/', (req,res)=>{
    const products = service.find();
    res.json([products])
});

router.get('/filter',(req,res)=>{
    res.send('I\'m a filter');
})

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
});

router.post('/', (req, res)=>{
    const body = req.body;
    res.status(201).json({
        message: 'created',
        data: body
    })
});

// router.post('/:id', (req, res)=>{
//     const {id} = req.params;
//     const body = req.body;
//     res.json({
//         message: 'update',
//         data: body,
//         id,
//     })
// });

router.patch('/:id', (req, res)=>{
    const {id} = req.params;
    const body = req.body;
    res.json({
        message: 'update',
        data: body,
        id,
    })
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    const body = req.body;
    res.json({
        message: 'delete',
        id,
    })
});

module.exports = router;
