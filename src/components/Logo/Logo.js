import React from 'react';
import shopLogo from '../../assets/images/shoppingbag.jpg';
import classes from './Logo.module.css';


const logo = (props) => (
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={shopLogo} alt="My Shop" />
    </div>
);

export default logo;