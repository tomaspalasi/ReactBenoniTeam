import React from "react";
import ItemCount from "./ButtonCount";
import './css/prendas.css';

const Prenda = (props) =>{
  
    
    setTimeout(() =>{
        const loads = document.querySelectorAll("#loading")

        for (var i=0;i<loads.length;i+=1){
            loads[i].style.display = 'none';
            }

    }, 1000);

    setTimeout(() =>{
        const prods = document.querySelectorAll("#productos")

        for (var i=0;i<prods.length;i+=1){
            prods[i].style.visibility = 'visible';
        }
        
    }, 1500);


    return (
        <div>
            <div className="remerasBox">
                <div id='loading'>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                <figure id="productos">
                    <img className="remerasBenoni" src={props.img1} alt="remeraImg"/>
                    <img className="remerasBenoni" src={props.img2} alt="remeraImg"/>
                </figure>
            </div>
            <h3>{props.nombre}</h3>
            <h4>${props.precio}</h4>
            <ItemCount stock={props.stock} initial={0} onAdd={0}/>
        </div>
    )
}

export default Prenda;