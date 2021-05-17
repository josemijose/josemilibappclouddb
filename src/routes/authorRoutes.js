const express= require("express");
const authorsRouter=express.Router();
const Authordata = require("../model/Authordata");


function router(nav){


// for author page
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

    // for each author page

    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",
            {nav,
            title:'Library',
            author
        });
        })
       
    });


// for edit button

authorsRouter.get('/:id/edit',function(req,res)
{  
    const author= Authordata.findById(req.params.id)
    res.render('edita', { author: author })
})

authorsRouter.put('/:id',  function(req, res) {

    const author =  Bookdata.findById(req.params.id)
    author.name = req.body.name
    author.genre=req.body.genre
    author.description=req.body.description
    author.image=req.body.image
    author.save()
    res.redirect(`/authors/${author.id}`)
  } 
)



// authorsRouter.put('./:id', async (req, res) => {
//   let author
//   try {
//     author = await Authordata.findById(req.params.id)
//     author.name = req.body.name
//     await author.save()
//     res.redirect(`/authors/${author.id}`)
//   } catch {
//     if (author == null) {
//       res.redirect('/')
//     } else {
//       res.render('edit', {
//         author: author,
//         errorMessage: 'Error updating Author'
//       })
//     }
//   }
// })


// for update

// authorsRouter.put('/:id', async (req, res) => {
//     let author
//     try {
//       author = await Authordata.findById(req.params.id)
//       author.name = req.body.name
//       author.genre=req.body.genre
//       author.description=req.body.description
//       author.image=req.body.image
//       await author.save()
//       res.redirect(`authors/${author.id}`)
//     } catch {
//       if (author == null) {
//         res.redirect('/')
//       } else {
//         res.render('authors/edita', {
//           author: author,
//           errorMessage: 'Error updating Author'
//         })
//       }
//     }
//   })



// for delete

authorsRouter.delete('/:id', async (req, res) => {
    let author
    try {
      author = await Authordata.findById(req.params.id)
      await author.remove()
      res.redirect('/authors')
    } catch {
      if (author == null) {
        res.redirect('/')
      } else {
        res.redirect(`/authors/${author.id}`)
      }
    }
  })

    return authorsRouter;
}

module.exports = router;


