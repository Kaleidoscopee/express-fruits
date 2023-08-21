import React from 'react'



function Index({ fruits }) {
    return (
        <div>
            <nav>
                <a href="/fruits/new">Create New Fruit</a>    
            </nav>
            {
            fruits.map((fruit, i) => {
                return (
                    <li key={i}>
                        <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color} <br/>
                        {
                            fruit.readyToEat ? "It is ready to eat" : "It is not ready to eat"
                        }
                    </li>
                )
            })
        }</div>
    )
}



export default Index