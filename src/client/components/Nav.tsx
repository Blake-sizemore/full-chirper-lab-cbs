import React from 'react';
import { NavLink } from 'react-router-dom';
// import Imgnav from './Imgnav';

const Nav = () => {

    return (
        <nav className="nav shadow bg-dark">
            {/* <Imgnav /> */}
            {/* <h1 className="text-white">Full Chirper</h1> */}
            <div className='d-flex justify-content-center mt-3'>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link   ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-dark-subtle rounded-top' : null}`} to="/">Home</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link   ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-dark-subtle rounded-top' : null}`} to="/admin">Admin</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'active text-dark  border-top border-start border-end border-secondary-subtle bg-dark-subtle rounded-top' : null}`} to="/mentions">Mentions</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Nav