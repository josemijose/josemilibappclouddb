const express= require("express");
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');

function router(nav)
{
  



    // for whole books page


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

    // for each book  book page


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

    // for edit button

    booksRouter.get('/:id/edit',async (req,res)=>
    {try  { 
        const book=await Bookdata.findById(req.params.id)
        
    }
    catch{
        res.redirect('/books')
    }})
    // for update

    booksRouter.put('/:id', async (req, res) => {
        let book
        try {
          book = await Bookdata.findById(req.params.id)
          book.title = req.body.title
          book.author=req.body.author
          book.genre=req.body.genre
          book.description=req.body.description
          book.image=req.body.image
          await book.save()
          res.redirect(`/books/${book.id}`)
        } catch {
          if (book == null) {
            res.redirect('/')
          } else {
            res.render('books/edit', {
              book: book,
              errorMessage: 'Error updating book'
            })
          }
        }
      })

// for delete
    booksRouter.delete('/:id', async (req, res) => {
        let book
        try {
          book = await Bookdata.findById(req.params.id)
          await book.remove()
          res.redirect('/books')
        } catch {
          if (book == null) {
            res.redirect('/')
          } else {
            res.redirect(`/books/${book.id}`)
          }
        }
      })


    return booksRouter;
}


module.exports=router;