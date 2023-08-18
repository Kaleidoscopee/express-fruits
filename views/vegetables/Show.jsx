const React = require('react')



function Show ({vegetables}){
   
    return(
        <div>
            <h1> The vegetable {vegetables.name} is {vegetables.color}</h1>
            {
                vegetables.readyToEat ? "It's ready to eat" : "Eww Yuck"
            }
           
        </div>
    )
​
}


module.exports = Show;