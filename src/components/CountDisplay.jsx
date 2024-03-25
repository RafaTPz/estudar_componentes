import React from "react";
import ReactDOM from "react-dom";

const CountDisplay = (props) => {
    console.log(props);
    return(
       <h1>The count is {props.currentCount}</h1>
    ); 
};

export default CountDisplay;