import React from 'react';
import { ThemeProvider } from 'styled-components';
import './Login.css'
import theme from '../../theme';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faFacebookF,
    faLinkedinIn,
    faGoogle
} from '@fortawesome/free-brands-svg-icons'
import LoginPage from './LoginPage';
library.add(faFacebookF, faLinkedinIn, faGoogle)


const Login = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>

                <LoginPage />

            </ThemeProvider>
        </div>
    );
};

export default Login;
