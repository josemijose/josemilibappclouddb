const express= require("express");
const Authordata = require("../model/Authordata");
const authorsRouter=express.Router();
function router(nav){



    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'library',
                authors
            });

        })
    });


    authorsRouter.get('/new',function(req,res){
    res.render("addauthor",
    {nav})
})
    
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("author",
        {nav,
        title:'Library',
        author
    });
    });

    return authorsRouter;
}

module.exports = router;


