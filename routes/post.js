const express =require('express');
const { OrderedBulkOperation } = require('mongodb');
const { db } = require('../models/schema');
const router=express.Router()
const schema=require('../models/schema')
var uuid = require('uuid');
const { request } = require('express');
var myid = uuid.v4();
/*router.get('/', async(req,res) => {
    try{
           const data=await schema.findOne({},{uuid:1})
           //const data=await model.find({},{uuid:1})
           res.json(data)
          

    }catch(err){
        res.send('Error ' + err)
    }
})*/
router.get('/:uuid', async(req,res) => {
    try{
           const data = await schema.findOne({uuid:req.params.uuid});
           res.json(data);
    }catch(err){
        res.send('Error ' + err)
    }
});

router.post('/', async(req,res) => {
    const data1 = new schema({
        name: req.body.name,
        branch: req.body.branch,
        idno: req.body.idno,
        uuid:uuid.v4()
        
    })
    
    try{
        const a1 =  await data1.save() 
        //constfindOne({},{uuid:1})
        res.json({},{a1:uuid})
        //res.json("uuid:"+data1.uuid)
        //const data = await schema.findOne({},{uuid:req.params.uuid});
        //res.json(schema.uuid)
        
    }catch(err){
        res.send('Error'+err)
    }
})

module.exports=router