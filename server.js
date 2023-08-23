require('dotenv').config();
const express = require('express');
const app = express();
// const port = 3000; //windows 5000 for mac users
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');
const port = 3000;
const Fruit = require('./models/fruits.js')
const mongoose = require('mongoose')

// CONNECT WITH MONGOOSE
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //removed bc deprecated -> useCreateIndex: true
})

mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB')
})

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
app.get('/fruits', async function(req, res) {
    const foundFruits = await Fruit.find({})
    res.render('fruits/Index', {
        fruits: foundFruits
    })
})




// app.get('/fruits', (req, res)=>{
//     Fruit.find({}, (error, allFruits)=> {
//         res.render("fruits/Index", {
//             fruits: allFruits
//         });
//     })
// });

//New
app.get('/fruits/new', (req, res) => {
    res.render("fruits/new")
});

//CREATE = POST
app.post('/fruits', async (req, res)=>{
    console.log("this is te created fruit", req.body)
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    // console.log("The fruits array", fruits)
    const createdFruit = await Fruit.create(req.body)
    res.redirect('fruits')
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