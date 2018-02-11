import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, client, blurb, link }) => {
  // whole card clicks through to case study
  return (
    <div className="w-100 w-30-ns tl">
      <img alt="" src={ image } className="w-100" />
      <div className="ph1">
        <h3 className="b f4">{ client }</h3>
        <p>{ blurb }</p>
        <Link className="b link pointer underline black" to={ `/case-study/${link}` } ><p> Read More </p> </Link>
      </div>
    </div>
  )
}

export default Card;
