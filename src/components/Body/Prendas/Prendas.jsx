import React from "react";
import ItemCount from "./ButtonCount";

const Prenda = (props) =>{

    return (
        <div>
            <figure>
                <img className="remerasBenoni" src={props.img1} alt="remeraImg"/>
                <img className="remerasBenoni" src={props.img2} alt="remeraImg"/>
            </figure>
            <h3>{props.nombre}</h3>
            <h4>${props.precio}</h4>
            <ItemCount stock={props.stock} initial={0} onAdd={0}/>
        </div>
    )
}

export default Prenda;