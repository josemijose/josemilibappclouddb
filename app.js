const express= require("express");
const loginRouter= express.Router();
const signupRouter=express.Router();
const app=new express();
const methodOverride=require('method-override')
const port =process.env.PORT || 2000;
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'},
    {
        link:'/login',name:'login'
    },
    {
        link:'/signup',name:'signup'
    },
    {
        link:'/admin',name:'add book' //means addbook
    },
    {
        link:'/addauthor',name:'add author'
    }
    ]

const adminRouter=require('./src/routes/adminRoutes')(nav)
const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorsRouter= require('./src/routes/authorRoutes')(nav)
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav)
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(methodOverride('_method'))
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addauthorRouter);


app.get('/',function(req,res){
    res.render("index",
    {nav,
    title:'Library'}
);});
loginRouter.get('/',function(req,res){
    res.render("login",
    {nav,
    title:'Library'}
    )
});
signupRouter.get('/',function(req,res){
    res.render('signup',
    {nav,
    title:'Library'});
});

addauthorRouter.get('/',function(req,res){
    res.render("addauthor",{nav});
});
app.listen(port,()=>{console.log("Server Ready at"+port)});
console.log("port no:2000"); 