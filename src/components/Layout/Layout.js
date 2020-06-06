import React, { useState } from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }
    console.log(props.isAuthenticated)
        return (
            <Aux>
                <Toolbar
                    isRole={props.isRole}
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                isRole={props.isRole}
                    isAuth={props.isAuthenticated}
                    open={sideDrawerIsVisible}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )};

        const mapStatesToProps=state=>{
            return{
              isAuthenticated:state.auth.token!==null,
              isRole:state.auth.role
            };
          };
export default connect(mapStatesToProps)(Layout);