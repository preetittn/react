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
import Customer from "./containers/updateProfile/Customer/Customer";
import EditCustomer from './containers/updateProfile/EditCustomer/EditCustomer';
import Category from './containers/Category/Category';


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
      {/* <Route path="/category" component={Category}/> */}
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/admin" component={Admin} />
        <Route path='/customer' component={Customer}/>
        <Route path="/editcustomer" component={EditCustomer}/>
        <Route path="/category" component={Category}/>

        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

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
