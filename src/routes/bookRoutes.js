const express= require("express");
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){
  
    // var books=[
    //     {title:'The God of Small Things',
    //      author:'Arundhati Roy',
    //     genre:'Novel',
    //     img:"godofsmallthings.jpg",
    //     more:'The God of Small Things is the debut novel of Indian writer Arundhati Roy. It is a story about the childhood experiences of fraternal twins whose lives are destroyed by the "Love Laws" that lay down "who should be loved, and how. And how much." The book explores how the small things affect peoples behavior and their lives. The book also reflects its irony against casteism, which is a major discrimination that prevails in India. It won the Booker Prize in 1997'    
    //     },   
    //     {title:'Meerasadhu',
    //     author:'K R Meera',
    //    genre:'Novel',
    //    img:"meerasadhu.jpg",
    //    more:'“Meera Sadhu”, is a very powerful novella by K.R.Meera. It has the tidings of Euripides’  Greek tragedy Medea, set to modern times. It was a chance article in Arts and Letters Daily, about the tragedy of Ted Hughes and Sylvia Plath that rekindled Meera Sadhu in my mind- as a tale which will always ring true.'
    //     }, 
    //    {title:'Diary of a Wimpy Kid',
    //     author:'Jeff KInney',
    //    genre:'Comedy',
    //    img:"wimpykid.jpg",
    //    more:"Diary of a Wimpy Kid is a series of fiction books written by American author and cartoonist, Jeff Kinney.[1][2] The books follow pre-teen Greg Heffley, who illustrates his daily life in a secret diary"
    //     }
    // ]

    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'library',
                books
            });

        })
    });

    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",
            {nav,
            title:'Library',
            book
        });
        })
       
    });
    return booksRouter;
}


module.exports=router;