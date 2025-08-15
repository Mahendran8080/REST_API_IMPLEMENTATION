const mongoose =require('mongoose');

const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is mandatory']
    },
    content:{
        type:String,
        required:true

    },
    author:{
        type:String,
        default:'Anonymous'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});//end of schema

const articleModel=new mongoose.model('articles',articleSchema);

module.exports=articleModel;