import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Spinner from '../../../UI/Spinner/Spinner';
import Button from '../../../UI/Button/Button';

const UpdateProduct = props => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    // const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    // const [isActive, setIsActive] = useState("");
    const [isCancellable, setIsCancellable] = useState("");
    const [isReturnable, setIsReturnable] = useState("");


    const [loading, setLoading] = useState(false);
    const { access_token } = props;


    const newProductHanlder = () => {
        props.history.push('/addProduct')
    }


    const submitHandler = (event) => {
        event.preventDefault();
        // const postData = {
        //     "id": id,
        //     "name": name,
        //     // "brand": brand,
        //     "description": description,
        //     // "isActive": isActive,
        //     "isCancellable": isCancellable,
        //     "isReturnable": isReturnable
        // }
        const headers = {
            Authorization: 'Bearer' + access_token
        }

        // http://localhost:8080/product/update/?desc=aaaa&id=131&isCancellable=true&isReturnable=true&name=qqqqqqq


        let query = "?"
            + `desc=${description}`
        // + `id=${id}`
        { query = query + `&id=${id}` };
        if (isCancellable) { query = query + `&isCancellable=${isCancellable}` };
        if (isReturnable) { query = query + `&isReturnable=${isReturnable}` };
        if (name) { query = query + `&name=${name}` };

        axios({
            method: "PUT",
            url: "http://localhost:8080/product/update/" + query,
            // data: formData,
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          })


        // axios.put('http://localhost:8080/product/update/' + query, { headers: headers })
            .then(response => {
                setLoading(false)
                props.history.push("/fetchProduct")
                alert(response.data);
                console.log(response.data)
            })
            .catch(error => {
                setLoading(false);
                console.log(error.response.data)
            })
     
    }


    const idChangeHandler = (event) => setId(event.target.value);
    const nameChangeHandler = (event) => setName(event.target.value);
    // const brandChangeHandler = (event) => setBrand(event.target.value);
    const descriptionChangeHandler = (event) => setDescription(event.target.value);
    // const isActiveChangeHandler = (event) => setIsActive(event.target.value);
    const isCancellableChangeHandler = (event) => setIsCancellable(event.target.value);
    const isReturnableChangeHandler = (event) => setIsReturnable(event.target.value);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="container">
            <h1>Update Product Details</h1>
            <form className="row" onSubmit={submitHandler} >

                {/* <div className="form-group col-md-3">
                <label className=" control-label">Id</label>
            </div> */}
                <div className="form-group col-lg-9">
                    <input className="form-control" placeholder="Id" type="text" onChange={idChangeHandler} />
                </div>
                {/* <div className="form-group col-md-3">
                <label className=" control-label">Country</label>
            </div> */}
                <div className="form-group col-lg-9">
                    <input className="form-control " placeholder="Name of the product" type="text" onChange={nameChangeHandler} />
                </div>
                {/* <div className="form-group col-md-3">
                <label className=" control-label">State</label>
            </div>   */}
                <div className="form-group col-lg-9">
                    <input className="form-control " placeholder="Describe the product" type="text" onChange={descriptionChangeHandler} />
                </div>
                {/* <div className="form-group col-md-3">
                <label className=" control-label">City</label>
            </div> */}
                <div className="form-group col-lg-9">
                    <input className="form-control " name="cancellable" type="checkbox" onChange={isCancellableChangeHandler} />
                    <label for="cancellable"> is it cancellable?</label><br />
                </div>

                {/* <input type="checkbox" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br> */}

                {/* <div className="form-group col-md-3">
                <label className=" control-label">zipCode</label>
            </div> */}
                <div className="form-group col-lg-9">
                    <input className="form-control " name="returnable" type="checkbox" onChange={isReturnableChangeHandler} />
                    <label for="cancellable"> is it returnable?</label><br />
                </div>
                {/* <div className="form-group col-md-3">
                <label className=" control-label"></label>
            </div> */}
                <div className="col-md-6">
                    <button type="edit" className="btn btn-info">Update product</button>
                </div>
                <div className="col-md-2">
                    <Button btnType="Primary" className="btn btn-info" clicked={() => newProductHanlder()}>Add New Product</Button>
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

export default connect(mapStateToProps)(UpdateProduct);