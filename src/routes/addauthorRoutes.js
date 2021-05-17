const express=require('express');
const addauthorRouter=express.Router();
const multer= require ('multer');
const Authordata=require('../model/Authordata');

const path=require('path');
const uploadPath=path.join('public',Authordata.ImageBasePath)
const imageMimeTypes=['image/jpeg','image/png','images/gif']

const upload=multer({
    dest:uploadPath,
    fileFilter:(req,file,callback)=>{
        callback(null,imageMimeTypes.includes(file.mimetype))

    }
})

function router(nav){
addauthorRouter.get('/',function(req,res){
    res.render('addauthor',{
        nav
    })
})
// acessing data

addauthorRouter.post('/add',upload.single('image'),function(req,res){
    const fileName=req.file!=null?req.file.filename:null
    const item  ={        
        name:req.body.name,
        genre:req.body.genre,
        
        description:req.body.description,
        image:fileName
    }
    var author=Authordata(item);
    author.save();
    res.redirect('/authors');

})
return addauthorRouter;
}
module.exports=router;