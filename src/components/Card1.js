import React from 'react'

function Card1(props) {

    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Id: {props.Id}</p>
        </div>
    )
}

export default Card1;