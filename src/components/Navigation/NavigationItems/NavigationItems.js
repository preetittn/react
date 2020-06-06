import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";
import Dropdown from "../Toolbar/Dropdown/Dropdown";


const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Home</NavigationItem>
    {props.isAuth && localStorage.getItem('role') === 'Admin' ? <NavigationItem link="/admin" active>Admin</NavigationItem> : null}
    {props.isAuth && localStorage.getItem('role') === 'Customer' ? <NavigationItem link="/customerProfile">Profile</NavigationItem> : null}
    {/* {props.isAuth && localStorage.getItem('role') === 'Admin' ? <NavigationItem link="/categoryOpr">CategoryOpr</NavigationItem> : null} */}
    {props.isAuth && localStorage.getItem('role') === 'Admin' ? <Dropdown /> : null} 
    {props.isAuth && localStorage.getItem('role') === 'Seller' ? <NavigationItem link="/fetchProductt" active>Product</NavigationItem> : null}


    {!props.isAuth ? (
      <NavigationItem link="/auth">Signin</NavigationItem>
    ) : (
        <NavigationItem link="/logout">Logout</NavigationItem>
      )}
  </ul>

);


export default navigationItems;