import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '../../../../UI/Button/Button';
import classes from './FetchAddress.module.css';

const FetchAddress = props => {

    const [addresses, setAddresses] = useState([]);

    const { access_token } = props;
    console.log(access_token)


    useEffect(() => {
        console.log(access_token)
        const headers = {
            Authorization: 'Bearer' + access_token
        }
        axios.get('http://localhost:8080/customer/profile/addresses', { headers: headers })
            .then(response => {
                console.log(response.data);
                setAddresses(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [access_token]);

    const deleteAddressHandler = (id) => {
        const headers = {
            Authorization: 'Bearer' + access_token
        }
        axios.delete('http://localhost:8080/customer/profile/address/' + id, { headers: headers })
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });

    };

    const updateAddressHandler = () => {
        props.history.push('/updateAddress');
    }
    return (

        <div className={classes.FetchAddress}>
            <h4>Address Details</h4>
            <div className="row" >
                <div className="col mb-3" >
                        {/* <div className="card-body" ></div> */}
                       <center> <table className="table table-hover table-responsive-sm" style={{ width: "auto"}} >
                            <thead className="thead-dark">
                                <tr>
                                    <th scope='col'>id</th>
                                    <th scope='col'>country</th>
                                    <th scope='col'>state</th>
                                    <th scope='col'>city</th>
                                    <th scope='col'>zipCode</th>
                                    <th scope='col'>address</th>
                                    <th scope='col'>label</th>
                                    <th scope='col'>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addresses.map((address, index) => (
                                    <tr key={address.id}>
                                        <th scope="row">{address.id}</th>
                                        <td>{address.country}</td>
                                        <td>{address.state}</td>
                                        <td>{address.city}</td>
                                        <td>{address.zipCode}</td>
                                        <td>{address.address}</td>
                                        <td>{address.label}</td>
                                        <td><Button btnType="Danger" clicked={(id) => deleteAddressHandler(address.id)}> Remove</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </center>
                        <Button btnType="Success" clicked={() => updateAddressHandler()}>Update Address</Button>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

        access_token: state.auth.token

    };
};
export default connect(mapStateToProps)(FetchAddress);