import React, {useState } from "react";
import classes from "./Reset.module.css";
import { updateObject} from '../../../Shared/Utility';
import Input from '../../../UI/Input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
// import * as actions from '../../../store/actions/index';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import Button from '../../../UI/Button/Button';


const Reset=props=>{

  const [params,setParams]=useState({
      email:{
          elementType:"input",
          elementConfig:{
              type:"email",
              placeholder:"Enter emailr",
          },
      },
      token:{
          elementType:"input",
          elementConfig:{
              type:"text",
              placeholder:"Enter token",
          },
      },
      pass:{
          elementType:"input",
          elementConfig:{
              type:"text",
              placeholder:"Enter pass",
          },
      },
      cpass:{
          elementType:"input",
          elementConfig:{
              type:"text",
              placeholder:" cc pass",
          },
      },
      
  });
  const[loading,setLoading]=useState(false);


  const submitHandler=(event)=>{
      event.preventDefault();
      setLoading(true)
      //let result=null;

      const paramData={};
      let query="?";
      for(let key in params){
      query=query+""+key+"="+params[key].value+"&";
      }

      console.log("Query passed is",query)
      for(let key in params){
          paramData[key]=params[key].value;
      }

      let fetchedData=null;
      fetchedData=axios.patch("http://localhost:8080/resetPassword"+query)
      setLoading(false)
      
      fetchedData.then(response=>{
         //result=response.fetchedData
         console.log(response);
      }).catch(error=>{
          console.log("error is",error)
      })
  }

  const formElementsArray=[];
  for(let key in params){
      formElementsArray.push({
          id:key,
          config:params[key],
      });
  };
  let form=formElementsArray.map((formElement)=>(
      <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      // value={formElement.config.value}
      // invalid={!formElement.config.valid}
      // shouldValidate={formElement.config.validation}
      // touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}/>
  ));

  const inputChangedHandler=(event,paramName)=>{
      const updatedSchedules=updateObject(params,{
          [paramName]:updateObject(params[paramName],{
              value:event.target.value
          }),
      });
      setParams(updatedSchedules);
  }

  if(loading){
      form=<Spinner/>
  }
  
    return (
      <div className={classes.Reset}>
        <h2><i className="fa fa-user"> Account Recovery</i></h2>
        <form onSubmit={submitHandler}>
          {form}
          <br/>
          <Button btnType="Success">Save Password</Button>
         
        </form>
      </div>
    )
  }
  
  export default Reset;
  
                  