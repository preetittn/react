import React from 'react';
import classes from './Toolbar.module.css';
// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Category from '../../../containers/Category/Category';
import Dropdown from '../Toolbar/Dropdown/Dropdown';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>
            {props.isAuth && localStorage.getItem('role') === 'Customer' ? <Category /> :
                <button class="btn btn-secondary" disabled>Visit Store</button>}
        </div>

        <div className={classes.SearchContainer}>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm" type="search" placeholder="Search..." aria-label="Search" />
                <div><button className="btn btn-secondary my-2 my-sm-0" type="submit">
                    <i className="fa fa-search"></i></button>
                </div>
            </form>
        </div>

    
            {/* {props.isAuth && localStorage.getItem('role') === 'Admin' ? <Dropdown /> : null} */}
    
        <nav className={classes.DesktopOnly}>
            <NavigationItems className={classes.Nav} isAuth={props.isAuth} />
        </nav>
        <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
);
export default toolbar;