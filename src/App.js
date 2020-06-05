import React, { useEffect } from "react";
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Admin from './containers/Admin/Admin';
// import Auth from './containers/Auth/Auth';
import Signin from './containers/Auth/Signin/Signin';
import Signup from './containers/Auth/Signup/Signup';
import Logout from './containers/Auth/Logout/Logout';
import Forgotpassword from './containers/Auth/Forgotpassword/Forgotpassword';
import Reset from './containers/Auth/Reset/Reset';
import classes from './App.module.css';
import CustomerProfile from "./containers/Profile/CustomerProfile/CustomerProfile";
import EditCustomer from './containers/Profile/EditCustomer/EditCustomer';
import Category from './containers/Category/Category';
import FetchAddress from './containers/Profile/Address/FetchAddress/FetchAddress';
import UpdateProfile from './containers/Profile/Address/UpdateAddress/UpdateAddress';
import NewAddress from './containers/Profile/Address/NewAddress/NewAddress';
import UpdateAddress from "./containers/Profile/Address/UpdateAddress/UpdateAddress";
import FetchProductt from "./containers/Product/FetchProduct/FetchProductt";
import UpdateProduct from "./containers/Product/UpdateProduct/UpdateProduct";
import AddProduct from './containers/Product/AddProduct/AddProduct';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

const App = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" component={asyncAuth} />
      <Route path="/" exact component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} /> 
      <Route path="/forgotpassword" component={Forgotpassword} />
      <Route path="/resetPassword" component={Reset}/>
      {/* <Route path="/fetchProduct" component={FetchProduct}/> */}
      {/* <Route path="/newAddress" component={NewAddress}/>
      <Route path="/updateAddress" component={UpdateAddress}/>
      <Route path="/fetchAddress" component={FetchAddress}/> */}
      {/* <Route path="/categories" component={Category}/> */}
      {/* <Route path="/customerProfile" component={CustomerProfile}/> */}
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={Admin} />
        <Route path='/customerProfile' component={CustomerProfile}/>
        <Route path="/editcustomer" component={EditCustomer}/>
        <Route path="/category" component={Category}/>
        <Route path="/updateAddress" component={UpdateAddress}/>
        <Route path="/fetchAddress" component={FetchAddress}/>
        <Route path="/updateProfile" component={UpdateProfile}/>
        <Route path="/newAddress" component={NewAddress}/>
        <Route path="/categories" component={Category}/>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/fetchProductt" component={FetchProductt} />
        <Route path="/updateProduct" component={UpdateProduct} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  };

  console.log(props.isAuthenticated)
  return (
    <div className={classes.App}>
      <Layout isAuthenticated={props.isAuthenticated}>{routes}</Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
