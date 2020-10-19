import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  console.log('===== navbar')
  console.log(props)
    //setTimeout( () => {
    //props.history.push('/')
  //}, 2000)
  console.log('===== navbar .....')
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><NavLink exact to='/' activeStyle={{ background: 'yellow',color:'black' }}>Home</NavLink></li>
          <li><NavLink to='/about' activeStyle={{ background: 'yellow',color:'black' }}>About</NavLink></li>
          <li><NavLink to='/contact' activeStyle={{ background: 'yellow',color:'black' }}>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
 export default withRouter(Navbar);