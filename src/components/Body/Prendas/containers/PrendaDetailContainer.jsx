import React, {useState, useEffect} from "react";
import PrendaDetail from "../productos/PrendaDetail";
import {remeras} from '../../../../mock/remeras'

const PrendaDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() =>{
        const getPrenda = () =>
            new Promise((res, rej)=>{
                const remera = remeras.find((rem) => rem.id === 1);
                setTimeout(() =>{
                    res (remera);
                },2000);
            });

            getPrenda()
                .then((info) => {
                    setItem(info);
                })
                .catch((error) => {
                    console.log(error)
                })
    },[]);


    return (
        <div>
            <PrendaDetail Items={item}/>
        </div>
    )
}


export default PrendaDetailContainer;