import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.style.scss';

//ReactComponent, SVG import etmek icin ozel bir sytax dir
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
    <div className="header">

        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/contact' className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            
        </div>

    </div>
)

export default Header;