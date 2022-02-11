import React, { useContext } from 'react'
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../components/auth/authContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    //console.log('private route');
const {pathname,search}=useLocation();

localStorage.setItem('lastPath',pathname+search)

  return user.logged
  ?children
  :<Navigate to="/auth/login"/>
};


//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {

//     return (
//         <Route { ...rest }
//             component={ (props) => (
//                 ( isAuthenticated )
//                     ? ( <Component { ...props } /> )
//                     : ( <Redirect to="/auth/login" /> )
//             )}
        
//         />
//     )
// }

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }
