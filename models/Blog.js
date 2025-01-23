const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
        maxLength:100
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})

module.exports = mongoose.model('Blog',blogSchema);