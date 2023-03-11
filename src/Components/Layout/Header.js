import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = props =>{
    return (<React.Fragment>
        <header className={classes.header}>
            <h1>Food Store</h1>
            <HeaderCardButton onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>  {/*due to dash character in name, we didn't use dot operator */}
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </React.Fragment>);
};

export default Header