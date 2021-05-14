const express= require("express");
const authorsRouter=express.Router();
function router(nav){
    // var authors=[
    //     {title:'Arundhati Roy',
    //      genre:'Fiction, Nonfiction',
    //      img:"arundhtiroy.jpg",
    //      more:"Suzanna Arundhati Roy is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author. She is also a political activist involved in human rights and environmental causes."
    //     },   
    //     {title:'K R Meera',
    //      genre:'Novel, short story',
    //      img:"krmeera.jpg",
    //      more:"K. R. Meera  is an Indian author and journalist, who writes in Malayalam. She worked as a journalist in Malayala Manorama but later resigned to concentrate more on writing. She started writing fiction in 2001 and her first short story collection Ormayude Njarambu was published in 2002. Since then she has published five collections of short stories, two novellas, five novels and two children's books. She won the Kerala Sahitya Akademi Award in 2009 for her short-story, Ave Maria. Her novel Aarachaar (2012) is widely regarded as one of the best literary works produced in Malayalam language."
    //     }, 
    //     {title:'Jeff kinney',
    //      genre:'Childrens novels, realistic fiction, satire, comedy',
    //      img:"jeff.jpg",
    //      more:"Jeffrey Patrick Kinney  is an American author and cartoonist, best known for the children's book series Diary of a Wimpy Kid. He also created the child-oriented website Poptropica."
    //     }
    // ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {nav,
        title:'Library',
        authors});
    });
    
    
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("author",
        {nav,
        title:'Library',
        author:authors[id]
    });
    });

    return authorsRouter;
}

module.exports = router;


