const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost:27017/local'
const app=express()
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function(){
console.log('connected')
})
app.use(express.json())
const route=require('./routes/post')
app.use('/post',route)
app.listen(3000,function(){
console.log('Server started')
})