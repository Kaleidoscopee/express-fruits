const React = require('react')

    function Show({fruit}) {
        console.log(fruit)
        return(

        <div>
        <h1> The fruit {fruit.name} is {fruit.color}</h1>
            {
                fruit.readyToEat ? "It's ready to eat" : "Eww Yuck"
            }
           
        </div>
        )

        }
module.exports = Show;