import React, {useState, useEffect} from "react";
import PrendaDetail from "../productos/PrendaDetail";
import {remeras} from '../../../../../mock/remeras'
import Header from "../../../../Header/Header";
import Footer from '../../../../Footer/Foter'

const PrendaDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() =>{
        const getPrenda = () =>
            new Promise((res, rej)=>{
                const remera = remeras.find((rem) => rem.id === 1);
                setTimeout(() =>{
                    res (remera);
                },500);
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
            <Header/>
            <PrendaDetail Items={item}/>
            <Footer/>
        </div>
    )
}


export default PrendaDetailContainer;