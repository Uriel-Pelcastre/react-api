import React, { useContext } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from './authContext';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'tetrico13@hotmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    // const navigate=useNavigate();
    // const {dispatch}=useContext(AuthContext);

    // const handleLogin=()=>{
        
    //     const action={
    //         type:types.login,
    //             payload:{name:'Uriel'}
    //         }
    //         dispatch(action);
    //         const lastPath=localStorage.getItem('lastPath'||'/about')
    //         //console.log('handleLogin');
    //     navigate(lastPath,{
    //         replace:true
    //     });
    // }
    


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form 
               onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                     value={ email }
                     onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    //onClick={handleLogin}
                   value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                    to="/Home"
                >
                    Login
                </button>
                <Link 
                    to="/about"
                    className="link"
                >
                    login 
                </Link>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
            </form>
        </>
    )
}
