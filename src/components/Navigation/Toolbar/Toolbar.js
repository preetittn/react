import React from 'react';
import classes from './Toolbar.module.css';
// import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Category from '../../../containers/Category/Category';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        
        {/* <div className="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Visit Store
            </button>
            <div class="dropdown-menu dropdown-primary">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div> */}
                {/* <div><Category  isAuth={props.isAuthenticated}/></div> */}
                {/* {props.isAuth ? <NavigationItem link="/customerProfile">Profile</NavigationItem> : null} */}
<div>{props.isAuth ? <Category /> : <button class="btn btn-secondary" disabled>Visit Store</button>}</div>

        <div className={classes.SearchContainer}>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm" type="search" placeholder="Search..." aria-label="Search" />
                <div><button className="btn btn-secondary my-2 my-sm-0" type="submit">
                    <i className="fa fa-search"></i></button>
                </div>
            </form>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems className={classes.Nav} isAuth={props.isAuth} />
        </nav>
        <DrawerToggle clicked={props.drawerToggleClicked} />
    </header>
);
export default toolbar;