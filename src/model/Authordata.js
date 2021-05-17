// access mongoose package
const mongoose=require('mongoose');
// database connection

const authorimagepath='images/author'

// Schema definition
const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    name:String,
    genre:String,
    description:String,
    image:String
});


// Model creation
const Authordata= mongoose.model('authordata',AuthorSchema);
 
module.exports=Authordata;
module.exports.authorimagepath=authorimagepath;