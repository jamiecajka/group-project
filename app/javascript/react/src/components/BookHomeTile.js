import React from 'react';
import { Link } from 'react-router'

const BookHomeTile = (props) => {
  return (

        <div className="column column-block">
          <Link to = {`/books/${props.id}`}>
          <div className="book-home-tile">
            <h4>{props.title}</h4>
            <p>{props.author}</p>
            <p>{props.created}</p>
            <img className="book-image" src={props.image}></img>
          </div>
          </Link>
        <br></br>
        </div>

  )
}

export default BookHomeTile
