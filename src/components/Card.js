import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} alt="book"></img>
        <div>
            <div>
                <h3>{props.title}</h3>
                <p className='author'>{props.author}</p>
            </div>
            <p className='price'>FREE</p>
        </div>
    </div>
  )
}

export default Card
