import React from 'react';
import GoogleButton from "react-google-button";
import { serverUrl } from '../../config';
import './auth.css';

const Auth = () => {
  const openGooglePage = () => {
    window.open(`${serverUrl}/auth/google`, '_self')
  };

  return (
    <div className='auth-container'>
        <GoogleButton onClick={openGooglePage}/>
    </div>
    )
};

export default Auth;