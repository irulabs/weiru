import React from 'react';

import checkbox from '../assets/icons/checkbox.svg';

const CheckboxItem = ({ title, text}) => {
  return (
    <div className="flex items-center mw7-ns">
      <img src={ checkbox } className="h2p5 pl4" alt="filled-in checkbox icon"/>
      <div className="flex flex-column tl pl3">
      <h4 className="mb1">{ title }</h4>

      <p className="mt0">{ text }</p>
      </div>
    </div>
  )
}


export default CheckboxItem;
