import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ width, image, client, blurb, link }) => {
  // whole card clicks through to case study
  return (
    <div className={`${width} tl mb4 mb0-l`}>
      <img alt="" src={ image } className="w-100" />
      <div className="ph1">
        <h3 className="b f4 h3 ma0 flex items-center">{ client }</h3>
        <p>{ blurb }</p>
        <Link className="b link pointer underline black" to={ `/case-study/${link}` } ><p> Read More </p> </Link>
      </div>
    </div>
  )
}

export default Card;
