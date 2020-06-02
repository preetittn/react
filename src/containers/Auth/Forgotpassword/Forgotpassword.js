import React, { useState } from "react";
import classes from "./Forgotpassword.module.css";
// import { updateObject } from '../../../Shared/Utility';
import axios from 'axios';
import Input from '../../../UI/Input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
// import { Link } from 'react-router-dom';

const Forgotpassword = React.memo((props) => {
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useState("");

  if (loading) {
    return <Spinner />
  }


  const inputChangedHandler = (event, paramName) => {
    // const updatedSchedules=updateObject(params[paramName],{
    //     [paramName]:updateObject(params[paramName],{
    //         value:event.target.value
    //     })
    // });
    setParams(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let email = params
    setLoading(true);
    let fetchedData = null;
    console.log(params)
    fetchedData = axios.post("http://localhost:8080/token/" + email)
    fetchedData.then(response => {
      setLoading(false)
      console.log(response)
      props.history.push("/resetPassword")
    }).catch(error => {
      setLoading(false)
      console.log("Error is", error.data)
    });
  };

  return (
    <div className={classes.Forgotpassword}>
      <h2><i className="fa fa-user"> Account Recovery</i></h2>
      <form onSubmit={submitHandler}>
        <Input type="text" placeholder="Email" value={params} changed={inputChangedHandler}></Input>
        <br />
        <button type="submit" class="btn btn-secondary" >Send Confirmation</button>
      </form>
    </div>
  );

});

export default Forgotpassword;
