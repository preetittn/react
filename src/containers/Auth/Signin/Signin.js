import React, { useState,useEffect } from "react";
import classes from "./Signin.module.css";
import { updateObject, checkValidity } from '../../../Shared/Utility';
import Input from '../../../UI/Input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';

const Signin = props => {
  const [signin, setSignin] = useState({
    role: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "none", displayValue: "SELECT USER TYPE" },
          { value: "Admin", displayValue: "Admin" },
          { value: "Seller", displayValue: "Seller" },
          { value: "Customer", displayValue: "Customer" },
        ],
      },
      value: '',
      validation: {},            
      valid:false,
      touched:false
    },
    username: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "E-mail",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 8,
        maxLength: 15,
      },
      valid: false,
      touched: false,
    },
  });

  const [isSignup,setIsSignup]=useState(true);

    const{onSetAuthRedirectPath,authRedirectPath}=props;

    useEffect(()=>{

        if(authRedirectPath !== '/'){
            
            onSetAuthRedirectPath();
        }
    },[onSetAuthRedirectPath,authRedirectPath]);

  const inputChangedHandler = (event, loginData) => {
    const updatedSchedules = updateObject(signin, {
      [loginData]: updateObject(signin[loginData], {
        value: event.target.value,
        valid: checkValidity(event.target.value, signin[loginData].validation),
        touched: true,
      }),
    });
    setSignin(updatedSchedules);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    props.onAuth(signin)

};
const switchAuthModeHandler=()=>{
    setIsSignup(!isSignup);
};

  const formElementsArray = [];
  for (let key in signin) {
    formElementsArray.push({
      id: key,
      config: signin[key],
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  // const submitHandler = (event) => {
  //   event.preventDefault();
  // };

  if (props.loading) {
    form = <Spinner />;
  }


  let errorMessage=null;
  if(props.error){
    errorMessage=(
      <p>{props.error.message}</p>
    );
  }

  let authRedirect=null;

  if(props.isAuthenticated){
    authRedirect=<Redirect to={props.authRedirectedPath}/>
  }

  return (
    <div className={classes.LoginData}>
      {authRedirect}
      {errorMessage}
      <h2><i className="fa fa-user"> Login</i></h2>
      <form onSubmit={submitHandler}>
        {form}
        <br/>
        <button type="submit" class="btn btn-dark" onClick={switchAuthModeHandler}>Signin</button>

        <br/>
        <br/>
          <Link to="/forgotpassword" className={classes.Link1}>  Forgot Password</Link>
          <p className={classes.Link2}>New Customer?<Link to="/signup">  Create an account</Link></p>
      </form>
    </div>
  );
}


const mapStateToProps=state=>{
  return{
      loading:state.auth.loading,
      error:state.auth.error,
      isAuthenticated:state.auth.token!==null,
      authRedirectPath:state.auth.authRedirectPath
  };
};


const mapDispatchToProps=dispatch=>{
  return{
      onAuth:(signin)=>dispatch(actions.auth(signin)),
      onSetAuthRedirectPath:()=>dispatch(actions.setAuthRedirectPath('/'))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Signin);