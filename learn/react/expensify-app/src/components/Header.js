import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Home Page</NavLink>
        <NavLink to="/creat" activeClassName="isActive">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="isActive">Help</NavLink>
    </header>
)

export default Header;