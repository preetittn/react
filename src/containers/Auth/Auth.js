import React, { useState } from "react";
import classes from "./Auth.module.css";
import Signin from '../Auth/Signin/Signin';
import Signup from '../Auth/Signup/Signup';
import Button from '../../UI/Button/Button';


const Auth = (props) => {
  const [isSignup, setIsSignup] = useState(true);

  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className = {classes.Auth}>
      {isSignup ? <Signin /> : <Signup />}
      {/* {isSignup ? <Signin /> : <SignupSeller />} */}

      <Button clicked={switchAuthModeHandler} btnType="Primary"/>
     {/* {isSignup ?<div>New Customer?<br/> START HERE.</div> : <div>Already have an account?<br/> SIGNIN</div>} */}
     {/* {isSignup ?<div>New User?<br/> START HERE.</div> : <div>Already have an account?<br/> SIGNIN</div>} */}

      {/* </Button> */}
    </div>
  );
};

export default Auth;