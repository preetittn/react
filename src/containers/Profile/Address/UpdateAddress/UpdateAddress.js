import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Spinner from '../../../../UI/Spinner/Spinner';
import Button from '../../../../UI/Button/Button';
import classes from './UpdateAddress.module.css';

const UpdateAddress = props => {

    const [id, setId] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [address, setAddress] = useState("");
    const [label, setLabel] = useState("");


    const [loading, setLoading] = useState(false);
    const { access_token } = props;


    const newAddressHanlder = () => {
        props.history.push('/newAddress')
    }


    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            "id": id,
            "country": country,
            "state": state,
            "city": city,
            "zipCode": zipCode,
            "label": label,
            "address": address
        }
        const headers = {
            Authorization: 'Bearer' + access_token
        }
        axios.put('http://localhost:8080/customer/profile/updateAddress/' + id, postData, { headers: headers })
            .then(response => {
                setLoading(false)
                props.history.push("/fetchAddress")
                alert(response.data);
                console.log(response.data)
            })
            .catch(error => {
                setLoading(false);
                console.log(error.response.data)
            })

    }


    const idChangeHandler = (event) => setId(event.target.value);
    const countryChangeHandler = (event) => setCountry(event.target.value);
    const stateChangeHandler = (event) => setState(event.target.value);
    const cityChangeHandler = (event) => setCity(event.target.value);
    const zipCodeChangeHandler = (event) => setZipCode(event.target.value);
    const addressChangeHandler = (event) => setAddress(event.target.value);
    const labelChangeHandler = (event) => setLabel(event.target.value);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="container ">
            <h1>UpdateAddress</h1>
            <form onSubmit={submitHandler} >
                <div className={classes.UpdateAddress}>
                    <div className="form-group">
                        <input className="form-control" placeholder="Id" type="text" onChange={idChangeHandler} />
                    </div>

                    <div className="form-group">
                        <input className="form-control " placeholder="Country" type="text" onChange={countryChangeHandler} />
                    </div>

                    <div className="form-group">
                        <input className="form-control " placeholder="State" type="text" onChange={stateChangeHandler} />
                    </div>

                    <div className="form-group">
                        <input className="form-control " placeholder="City" type="text" onChange={cityChangeHandler} />
                    </div>

                    <div className="form-group">
                        <input className="form-control " placeholder="Zipcode" type="text" onChange={zipCodeChangeHandler} />
                    </div>

                    <div className="form-group">
                        <input className="form-control " placeholder="Address" type="text" onChange={addressChangeHandler} />
                    </div>

                    <div className="form-group">
                        <input className="form-control " placeholder="Label" type="text" onChange={labelChangeHandler} />
                    </div>

                    {/* <div className="col-md-5"> */}
                    <button type="edit" className="btn btn-info">Update Address</button>
                    {/* </div> */}
                    {/* <div className="col-md-3"> */}
                    <Button btnType="Primary" className="btn btn-info" clicked={() => newAddressHanlder()}>Add new Address</Button>
                    {/* </div> */}
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        access_token: state.auth.token
    };
};

export default connect(mapStateToProps)(UpdateAddress);