import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Category = props => {
    const [categories, setCategories] = useState([]);
    const [latestId, setLatestId] = useState("");
    const { access_token } = props;


    useEffect(() => {
        console.log(access_token)
        const headers = {
            Authorization: 'Bearer' + access_token
        }
        axios.get('http://localhost:8080/customer/profile/categories', { headers: headers })
            .then(response => {
                console.log(response.data);
                setCategories(response.data)
            }).catch(error => {
                console.log(error);
            });
    }, [access_token]);

    const categoryHandler = (categoryId) => {
        childCategoryHandler(access_token, categoryId);
    };

    const productViewHandler = () => {
        props.history.push("/category/" + latestId);
    }

    const childCategoryHandler = (access_token, latestId) => {
        let parId;
        const headers = {
            Authorization: 'Bearer ' + access_token
        }
        let query = '';
        if (latestId) {
            query = `?categoryId=${latestId}`;

        }
        axios.get('http://localhost:8080/customer/profile/categories' + query, { headers: headers })
            .then((response) => {
                console.log(response.data[0].parentId.id);
                parId = response.data[0].parentId.id;
                console.log(parId);
                setCategories(response.data)

            })
            .catch((error) => {
                console.log(error);
            });
        // onFetchCategories(access_token,parId);
    }

    return (
        <div className="container">
            <div className="dropdown">

                <button class="btn btn-secondary dropdown-toggle" type="button" id="menu1"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Visit Store
            </button>

                <div class="dropdown-menu dropdown-primary" role="menu" aria-labelledby="menu1">
                    {categories.map((category) => (
                        <li role="presentation" key={category.id}>{category.name}
                            <span onClick={() => categoryHandler(category.id)}><i className="fa fa-angle-right"></i></span>

                        </li>
                    ))}
                    {
                        categories.length === 0 && props.isAuthenticated ? (
                            <span onClick={productViewHandler}>
                                <i className="fa fa eye" aria-hidden="true">view</i>
                            </span>) : null
                    }

                    {
                        props.isAuthenticated && latestId && categories.length !== 0 ? (
                            <span onClick={(latestId) => childCategoryHandler(latestId)}>
                            </span>) : null
                    }
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        access_token: state.auth.token
    }
}
export default connect(mapStateToProps)(Category);