// access mongoose package
const mongoose=require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userone:userone@cluster0.nvotp.mongodb.net/libraryapp?retryWrites=true&w=majority')

const ImageBasePath='/images'

// Schema definition
const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    description:String,
    image:String
});




// Model creation
const Bookdata= mongoose.model('bookdata',BookSchema);
 
module.exports=Bookdata;
module.exports.ImageBasePath=ImageBasePath