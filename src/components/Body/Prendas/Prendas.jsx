import React from "react";
import SuperButton from "./Button";

const Prenda = (props) =>{
    return (
        <div>
            <figure>
                <img className="remerasBenoni" src={props.img} alt="remeraImg"/>
            </figure>
            <h3>{props.nombre}</h3>
            <h4>${props.precio}</h4>
            <SuperButton/>
        </div>
    )
}

export default Prenda;