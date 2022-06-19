const express = require('express');
const router = express.Router();
const Data = require('../models/student.model');

router.post('', async(req,res)=>{
    try{
        const data = await Data.create(req.body);
        return res.status(201).send(data);
    } catch(err){
        return res.status(400).send({ message: err.message });
    }
})

router.get('', async(req,res)=>{
    try{
        const data = await Data.find().lean().exec();
        return res.status(202).send(data);
    } catch(err){
        return res.status(402).send({ message: err.message });
    }
});

module.exports = router;