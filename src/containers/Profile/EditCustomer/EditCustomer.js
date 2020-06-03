import React, { useState } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import Input from '../../../UI/Input/Input';
import Aux from '../../../hoc/Aux/Aux';
import Spinner from '../../../UI/Spinner/Spinner';
import classes from './EditCustomer.module.css';
import {updateObject} from '../../../Shared/Utility'; 
// import {Link} from 'react-router-dom';


const EditCustomer = props => {
    const [params,setParams]=useState({
        firstName:{
            elementType:"input",
            elementConfig:{
                type:"text",
                placeholder:"Enter  firstName",
            },
        },
        lastName:{
            elementType:"input",
            elementConfig:{
                type:"text",
                placeholder:"Enter lastName",
            },
        },
        contact:{
            elementType:"input",
            elementConfig:{
                type:"text",
                placeholder:"Enter contact",
            },
        },
        
    });

    const[loading,setLoading]=useState(false);
    const {access_token}=props;

        const submitHandler=(event)=>{
            event.preventDefault();
            const formData = {};
                for (let key in params) {
                formData[key] = params[key].value;
                }
                console.log(formData)
            axios({
                method: "PATCH",
                url: "http://localhost:8080/customer/profile",
                data: formData,
                headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + access_token,
                },
                })
            .then((response)=>{
                setLoading(false);
                props.history.push("/customerProfile")
                console.log(response.data)
            })
            .catch((error)=>{
                setLoading(false);
                console.log(error);
            });
            };

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
        <Aux>
            <div class="container">
                <h1>Edit Profile</h1>
                <div class="row">
                    {/* <!-- left column --> */}
                    <div class="col-md-3">
                        <div className={classes.Picture}>
                            <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
                            <h6>Upload a different photo...</h6>

                            <input type="file" class="form-control" />
                        </div>
                    </div>

                    {/* <!-- edit for/m column --> */}
                    <div class="col-md-9 personal-info">
                        {/* <div class="alert alert-info">
                            <i class="fa fa-coffee"></i>
                            Password <strong> must contain</strong> 8-15 characters with:
                                <br />atleast one special symbol
                                <br />atleast one uppercase letter
                                <br />atleast one lowercase letter
                                <br />atleast one numeric digit.
                        </div> */}

                        <h3>Personal info</h3>

                        <form class="row" onSubmit={submitHandler}>

                            <div class="form-group col-lg-3">
                                {form}
                            </div>
                       
                            
                            <div class="form-group col-md-3">
                                <label class=" control-label"></label>
                            </div>
                            <div class="col-md-6">
                            <button type="edit" class="btn btn-success">Save Changes</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button type="reset" class="btn btn-danger">Cancel</button>
                                    {/* &nbsp;&nbsp;&nbsp; */}
                                {/* <button type="edit" class="btn btn-info">Update Profile</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Aux>
    )
};

const mapStateToProps = state => {
    return {
        access_token: state.auth.token
    };
};


export default connect(mapStateToProps)(EditCustomer);