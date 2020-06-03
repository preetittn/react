import React, { useState } from 'react';
import classes from './Signup.module.css';
import { updateObject, checkValidity } from '../../../Shared/Utility';
import Input from '../../../UI/Input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
import axios from "axios";
// import * as actions from '../../../store/actions/index';
// import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
// import {headers} from ''

const Signup = (props) => {
  const [signup, setSignup] = useState({
    firstName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "First Name",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      touched: false,
    },
    middleName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Middle Name",
      },
      value: "",
      validation: {
        required: false,
      },
      isValid: false,
      touched: false,
    },
    lastName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Last Name",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Email id",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      isValid: false,
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
      isValid: false,
      touched: false,
    },
    confirmPassword: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Re-enter Password",
      },
      value: "",
      validation: {
        required: true,
        minLength: 8,
        maxLength: 15,
      },
      isValid: false,
      touched: false,
    },
    contact: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Contact number",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      touched: false,
    },
  });

  const [loading, setLoading] = useState(false);

  const inputChangedHandler = (event, registerData) => {
    const updatedSchedules = updateObject(signup, {
      [registerData]: updateObject(signup[registerData], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          signup[registerData].validation
        ),
        touched: true,
      }),
    });
    setSignup(updatedSchedules);
  };

  const formElementsArray = [];
  for (let key in signup) {
    formElementsArray.push({
      id: key,
      config: signup[key],
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

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const registerData = {};

    for (let key in signup) {
      registerData[key] = signup[key].value;
      console.log(signup[key].value)
    }


    // console.log("Registered as,", (signup.signupAs.value));
    // let responseData = null;
    // if 
    // (signup.signupAs.value === "emp") 
    // {  // } 
    // else {
    //   responseData = axios.post(
    //     "http://localhost:8080/auth/sellers",+
    //     registerData
    //   );
    // }
    console.log("In customer block")
    //   responseData = axios.post(
    //     "http://localhost:8080/register/customer",
    //     registerData
    //   );

    // responseData
    //   .then((response) => {
    //     setLoading(false);
    //     console.log("Registered data response is", response);
    //     alert(response.data)
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log("Error is", error);
    //   });
    console.log("****" + registerData);
    axios.post('http://localhost:8080/register/customer', registerData)
      .then(response => {
        console.log(response.data);
        props.history.push("/signin")
        setLoading(false);
      })
      .catch(error => {
        if (error) {
          setLoading(false);
          console.log(error);
        }
      })
  };

  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className={classes.RegisterData}>
      <h2><i className="fa fa-user-plus">  User Registration</i></h2>
      <p>Please fill in all the required fields to create a new user account.</p>
      <form onSubmit={submitHandler}>
        {form}

        {/* <Link to="/signin"> */}
          <button type="submit" class="btn btn-dark">SignUp</button>
        {/* </Link> */}
        <br />
        <br />
        Already have an account?<Link to="/signin">  Signin</Link>
      </form>
    </div>
  );
};

export default Signup;