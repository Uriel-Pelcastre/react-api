import PropTypes from 'prop-types';
import { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../components/auth/authContext';
import { Navigate, useLocation } from 'react-router-dom';


export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);


  return user.logged
  ?<Navigate to="/about"/>
  :children
};
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {

//     return (
//         <Route { ...rest }
//             component={ (props) => (
//                 ( isAuthenticated )
//                     ? ( <Redirect to="/auth/login"/> )
//                     : ( <Component { ...props } /> )
//             )}
        
//         />
//     )
// }

// PublicRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }