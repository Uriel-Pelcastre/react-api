import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
//import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';


import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';

import App from './App';
import { HomePage } from '../pages/HomePage';
import Bebidas from '../pages/bebidassn';
//import App from './App';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                 setIsLoggedIn( true );
                 dispatch( login( user.uid ) );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    
                    <PublicRoute 
                        path="/auth"
                        component={App }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ Bebidas }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}

