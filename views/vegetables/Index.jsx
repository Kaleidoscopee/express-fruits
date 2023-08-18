import React from 'react'



function Index({vegetables}) {
    return (
        <div>{
            vegetables.map((vegetable, i) => {
                return (
                    <li key={i}>
                        <a href={`/vegetables${i}`}>{vegetable.name}</a> is {vegetable.color} <br/>
                        {
                            vegetable.readyToEat ? "It is ready to eat" : "It is not ready to eat"
                        }
                    </li>
                )
            })
        }</div>
    )
}




module.exports = Index