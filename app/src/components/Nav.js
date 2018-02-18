import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({color="bg-white", position = "inherit", borders="bn"}) => {
  return (
    <nav className={ `${position} ${borders} w-100 ${color} white tl ph3` }>
      <Link className="link near-black" to="/">
        <h3 className="f3 ma3">iru labs</h3>
      </Link>
    </nav>
  )
}

export default Nav;
