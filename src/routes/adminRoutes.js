const express=require('express');
const adminRouter=express.Router();
const multer= require ('multer');
const Bookdata=require('../model/Bookdata');

const path=require('path');
const uploadPath=path.join('public',Bookdata.ImageBasePath)
const imageMimeTypes=['image/jpeg','image/png','images/gif']

const upload=multer({
    dest:uploadPath,
    fileFilter:(req,file,callback)=>{
        callback(null,imageMimeTypes.includes(file.mimetype))

    }


})



// look of addbook page
function router(nav){
adminRouter.get('/',function(req,res){
    res.render('addbook',{
        nav
    })
})
// acessing data

adminRouter.post('/add',upload.single('image'),function(req,res){
    const fileName=req.file!=null?req.file.filename:null
    const item  ={        
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        description:req.body.description,
        image:fileName
    }
    var book=Bookdata(item);
    book.save();
    res.redirect('/books');

})
return adminRouter;
}
module.exports=router;