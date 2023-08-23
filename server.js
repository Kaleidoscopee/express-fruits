const express = require('express');
const app = express();
// const port = 3000; //windows 5000 for mac users
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');
const port = 3000;

//Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next)=> {
    console.log('I run for all routes!')
    next();
});
//this allows the body 
app.use(express.urlencoded({extended: false}));


//ROUTES
//index 
app.get('/fruits', (req, res)=>{
    res.render("fruits/Index", {
        fruits: fruits
    });
});

//New
app.get('/fruits/new', (req, res) => {
    res.render("fruits/new")
});

//CREATE = POST
app.post('/fruits', (req, res)=>{
    console.log("this is te created fruit", req.body)
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    console.log("The fruits array", fruits)
    res.redirect('/fruits')
});

//show
app.get('/fruits/:index', (req, res)=>{
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.index] 
        //there will be a variable available inside the ejs file called fruit, 
        //its value is fruits[req.params.indexOfFruitsArray]
    });
});

//Vegetables
app.get('/vegetables', (req, res)=>{
    res.render("vegetables/Index", {
        vegetables: vegetables
    });
});

//New vegetable
app.get('/vegetables/new', (req, res) => {
    res.render("vegetables/new");
});

//show vegetable
app.get('/vegetables/:index', (req, res)=>{
    res.render('vegetables/Show', { //second param must be an object
        vegetable: vegetables[req.params.index] 
        //there will be a variable available inside the ejs file called vegetable, 
        //its value is fruits[req.params.indexOfVegetablesArray]
    });
});


app.get('/vegetables/:indexOfVegetablesArray', (req, res)=>{
    res.render('vegetables/Show', { //second param must be an object
        vegetables: vegetables[req.params.indexOfVegetablessArray] 
        //there will be a variable available inside the ejs file called vegetables, 
        //its value is vegetables[req.params.indexOfVegetablesArray]
    });
});


app.listen(port, ()=>{
    console.log(`listening`)
});