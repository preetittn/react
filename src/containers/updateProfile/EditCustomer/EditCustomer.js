import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

import Aux from '../../../hoc/Aux/Aux';
// import classes from "*.module.css";
import classes from './EditCustomer.module.css';


const EditCustomer = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contact, setContact] = useState("");

    const { access_token } = props;
    console.log(access_token)
    useEffect(() => {
        console.log(access_token)
        const headers = {
            Authorization: 'Bearer' + access_token
        }
        axios.get('http://localhost:8080/customer/profile', { headers: headers })
            .then(response => {
                console.log(response.data);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setContact(response.data.contact);
                //setImage(response.data.image);
            })
            .catch(error => {
                console.log(error.response.data.error);
            });
    }, [access_token]);

    const firstNameChangeHandler = (e) => { setFirstName(e.target.value) }
    const lastNameChangeHandler = (e) => { setLastName(e.target.value) }
    const contactChangeHandler = (e) => { setContact(e.target.value) }
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

                        <form class="row" >

                            <div class="form-group col-lg-3">
                                <label class=" control-label">First name:</label>
                            </div>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" value={firstName} onChange={firstNameChangeHandler} />
                            </div>

                            <div class="form-group col-lg-3">
                                <label class=" control-label">Last name:</label>
                            </div>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" value={lastName} onChange={lastNameChangeHandler} />
                            </div>


                            <div class="form-group col-lg-3">
                                <label class=" control-label">Contact Number:</label>
                            </div>
                            <div class="col-lg-9">
                                <input class="form-control" type="text" value={contact} onChange={contactChangeHandler} />
                            </div>


                            <div class="form-group col-md-3">
                                <label class=" control-label">Password:</label>
                            </div>
                            <div class="col-md-9">
                                <input class="form-control" type="password" />
                            </div>

                            <div class="form-group col-md-3">
                                <label class=" control-label">Confirm password:</label>
                            </div>
                            <div class="col-md-9">
                                <input class="form-control" type="password" />
                            </div>

                            <div class="form-group col-md-3">
                                <label class=" control-label"></label>
                            </div>
                            <div class="col-md-6">
                                <button type="button" class="btn btn-success">Save Changes</button>
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