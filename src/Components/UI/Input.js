import React from "react";
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) =>{
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} /> {/*used to display attributes passed as object 
                                        for the input element by using spread operator */}
        </div>
    );
});

export default Input;