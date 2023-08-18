const express = require('express');
const app = express();
// const port = 3000; //windows 5000 for mac users
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');

//Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//ROUTES

//index 
//Fruits
app.get('/fruits', (req, res)=>{
    res.render("Index", {
        fruit: fruits
    })
});

app.get('/fruits/:indexOfFruitsArray', (req, res)=>{
    res.render('Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] 
        //there will be a variable available inside the ejs file called fruit, 
        //its value is fruits[req.params.indexOfFruitsArray]
    });
})

//Vegetables
app.get('/vegetables', (req, res)=>{
    res.render("vegetables/Index", {
        vegetables: vegetables
    })
});

app.get('/vegetables/:indexOfVegetablesArray', (req, res)=>{
    res.render('vegetables/Show', { //second param must be an object
        vegetables: vegetables[req.params.indexOfVegetablessArray] 
        //there will be a variable available inside the ejs file called vegetables, 
        //its value is vegetables[req.params.indexOfVegetablesArray]
    });
})


app.listen(3000, ()=>{
    console.log(`listening`)
});