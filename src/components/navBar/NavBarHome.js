import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBarHome = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <NavLink
                        
                        className={({isActive})=>'nav-item nav-link ' + (isActive?'active':'')}
                        to="/"
                    >
                        Bebidas sin alcohol
                    </NavLink>

                    <NavLink 
                         className={({isActive})=>'nav-item nav-link ' + (isActive?'active':'')} 
                        to="/auth/login"
                    >
                        DC
                    </NavLink> */}

            <NavLink
                className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                to="/alcohol"
            >
                Bebidas con alcohol
            </NavLink>
        </nav>
    )
};
