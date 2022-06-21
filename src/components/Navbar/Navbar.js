import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import './Navbar.css'
import { Button } from '../assets/Button/Button';

const Navbar = () => {

    const [toggle, setToggle] = useState(true)
    const handleToggle = () => setToggle(!toggle)
    const closeMobileMenu = () => setToggle(false)
    const [button, setButton] = useState(true)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)

        }
        else {
            setButton(true)
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to='/' >
                    TIMU
                </Link>
                <div className='menu-icon' onClick={handleToggle}>
                    {
                        toggle ? <GiHamburgerMenu className='toggle-icon' /> : <GrClose className='toggle-icon' />
                    }
                </div>
                <ul className={toggle ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/' className='nav-links' onCLick={closeMobileMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to='/services' className='nav-links' onCLick={closeMobileMenu}>Services</Link>
                    </li>
                    <li>
                        <Link to='/products' className='nav-links' onCLick={closeMobileMenu}>Products</Link>
                    </li>
                    <li>
                        <Link to='/signUp' className='nav-links-mobile' onCLick={closeMobileMenu}>Sign Up</Link>
                    </li>
                </ul>
               {
                button && <Button buttonStyle='btn--ouline'>SIGN UP</Button>
               }
            </div>
        </div>
    );
};

export default Navbar;