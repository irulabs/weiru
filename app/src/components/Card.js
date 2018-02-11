import React from 'react';

const Card = ({ image, client, blurb }) => {
  // whole card clicks through to case study
  return (
    <div className="w-100 w-30-ns tl">
      <img alt="" src={ image } className="w-100" />
      <div className="ph1">
        <p className="b">{ client }</p>
        <p>{ blurb }</p>
      </div>
    </div>
  )
}

export default Card;
