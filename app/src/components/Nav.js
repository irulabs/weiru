import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({color = "bg-black", postion = "inherit"}) => {
  return (
    <nav className={ `${postion} ph7-l w-100 ${color} white tl pa1 ph3` }>
      <Link class="link white" to="/">
        <h3 className="f3 ma3">iru labs</h3>
      </Link>
    </nav>
  )
}

export default Nav;
