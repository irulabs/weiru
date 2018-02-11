import React from 'react';

const Nav = ({color = "bg-black", postion = "inherit"}) => {
  return (
    <nav className={ `${postion} ph7-l w-100 ${color} white tl pa1 ph3` }>
      <h3 className="f3 ma3">iru labs</h3>
    </nav>
  )
}

export default Nav;
