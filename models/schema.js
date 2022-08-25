const mongoose = require('mongoose')
const Schema = new mongoose.Schema({

name: {
type: String,
required: true
},
branch: {
type: String,
required: true
},
idno: {
type: Number,
required: true
},
uuid:{
type:String,
required:true
}

})

module.exports = mongoose.model('schema',Schema)
