import React from 'react';
import {Button} from '@material-ui/core';
import './Login.css';
import { auth } from '../firebase';
import { provider } from '../firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => console.log(result)).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="" alt="" />

                <div className="login__text">
                    <h1>
                        Sign in to Whatsapp
                    </h1>
                </div>

                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
