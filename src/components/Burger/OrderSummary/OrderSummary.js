import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = props=>{
    // This could be a functional component, doesn't have to be a class

        const ingredientSummary = Object.keys( props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3><center>Your Order</center></h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong><center>Total Price: {props.price.toFixed( 2 )}</center></strong></p>
                <p><center>Continue to Checkout!</center></p>
                <center><Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button></center>
            </Aux>
        );
    }


export default OrderSummary;