import React from 'react';
import OgunLogo from '../images/OgunLogo.png';
import ChoppingCart from '../images/ChoppingCart.png';

function  Nav () {

    // const [openMenu, setOpenMenu] = useState(false)
    const ambali = "Mobile";

    // const menuOptions
  return (
    <div className='NavContainer'>
          <img src={OgunLogo} className="NavLogo" alt="logo" />
        <ul className='nav-menu'>
            <li>
                <a href='#'>About Us</a>
            </li>
            <li>
                <a href='#'>Contact Us</a>
            </li>
            <li>
                <input type="search" id="nav-search"  placeholder='Search for more items'/>
            </li>
            <li>
                <a href='#'>FAQs</a>
            </li>
            <li>
                <a href='#'>Login</a>
            </li>
            <li>
                <a href='#'>Sign Up</a>
            </li>
            <li>
                <a href='#' id="Cat"><span><img src={ChoppingCart} className="Chop" alt="ChoppingCart"/></span>Cart</a>
            </li>
        </ul>
        <div id="mobile">
            <i id='bar' className="">{ambali}</i>
        </div>
    </div>
  )
}

export default Nav