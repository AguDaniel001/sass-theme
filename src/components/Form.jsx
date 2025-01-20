import React from 'react';
import Button from '../components/Button'
import TextInput from './TextInput';
import Header from './Header';
import SubText from './SubText';

function Login() {
  return (
    <div className='card'>
      <div>
        
        <Header tag="h4" text="Login" className="header" />
        <TextInput placeholder="Email" type="email" className="text-input" />
        <br /><br />
        <TextInput placeholder="Password" type="password" className="text-input" />
      </div>

      <div>
        <SubText tag="p" className="sub-text primary bold" text="Forgot password?" />
        <SubText tag="p" className="sub-text" text="By continuing, you agree to our Terms of Services and Privacy Policy." />
        
        <br />
        <Button text="Login" className="btn" />
        <br /><br />
        <Button text="Sign Up" className="btn outline" />
        
      </div>
    </div>
  );
};

export default Login;