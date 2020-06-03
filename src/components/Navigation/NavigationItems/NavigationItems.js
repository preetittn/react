import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import classes from "./NavigationItems.module.css";

// const navigationItems = (props) => (
//   <ul className={classes.NavigationItems}>
//   <NavigationItem link ="/" active>Home</NavigationItem>
//   <NavigationItem link="/admin">Admin</NavigationItem>

/* <NavigationItem link="/Signin">Signin</NavigationItem> */ 
/* 
     {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Signin</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )} 
    
  </ul>
); */

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Home</NavigationItem>
    <NavigationItem link="/admin" active>Admin</NavigationItem>
    {props.isAuth ? <NavigationItem link="/customerProfile">Profile</NavigationItem> : null}

    <NavigationItem link="/product" active>Product</NavigationItem>


    {!props.isAuth ? (
      <NavigationItem link="/auth">Signin</NavigationItem>
    ) : (
        <NavigationItem link="/logout">Logout</NavigationItem>

      )}
  </ul>

);


export default navigationItems;