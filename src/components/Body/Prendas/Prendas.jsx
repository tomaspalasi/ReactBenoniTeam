import React from "react";

const Prenda = (props) =>{
    return (
        <div>
            <figure>
                <img className="remerasBenoni" src={props.img} alt="remeraImg"/>
            </figure>
            <h3>{props.nombre}</h3>
            <h4>${props.precio}</h4>
        </div>
    )
}

export default Prenda;