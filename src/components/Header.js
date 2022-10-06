import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const linkStyles = {
    display: 'inline-block',
    width: 'fit-content',
    padding: "12px",
    margin: "0 6px 6px",
    background: "purple",
    textDecoration: "none",
    color: "black"
  }

  return (
    <div className='header-container'>
      <NavLink to='/' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>Home</NavLink>
      <NavLink to='/add-expense' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>Add Expense</NavLink>
      <NavLink to='/search' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>Search</NavLink>
    </div>
  )
}

export default Header;