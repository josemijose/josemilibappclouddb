// access mongoose package
const mongoose=require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userone:userone@cluster0.nvotp.mongodb.net/libraryapp?retryWrites=true&w=majority')

const ImageBasePath='/images'

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
module.exports.ImageBasePath=ImageBasePath