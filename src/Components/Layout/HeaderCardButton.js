import React from "react";
import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCardButton = props =>{
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;   //used for calculating no. of items added to the cart
    },0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => { //Here, the button animation will work on the dependency of no. of items changed
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}> {/*Displaying cart Icon */}
                <CartIcon />
            </span>
            <span>Your Cart</span> {/* Heading */}
            <span className={classes.badge}>{numberOfCartItems}</span> {/*Displaing no. of items added */}
        </button>
    )
};

export default HeaderCardButton;