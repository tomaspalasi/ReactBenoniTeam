import React from "react";
import SuperButton from "./ButtonCount";

const Prenda = (props) =>{
    return (
        <div>
            <figure>
                <img className="remerasBenoni" src={props.img1} alt="remeraImg"/>
                <img className="remerasBenoni" src={props.img2} alt="remeraImg"/>
            </figure>
            <h3>{props.nombre}</h3>
            <h4>${props.precio}</h4>
            <SuperButton/>
        </div>
    )
}

export default Prenda;