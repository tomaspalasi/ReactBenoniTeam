import React, {useEffect, useState } from "react";
import ItemDetail from "../items/ItemDetail";
import Header from "../../../../Header/Header";
import Footer from '../../../../Footer/Foter'
import {getFirestore, getDoc, doc} from "firebase/firestore"
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [productos, setProductos] = useState({})
  
    useEffect(()=>{
 
      const db = getFirestore();
      const response = doc(db, "items", id);
      getDoc(response).then((snapShot) => {
          if (snapShot.exists()) {
              setProductos({id:snapShot.id, ...snapShot.data()});
          }            
      });
  }, [id]);

    return (
        <div>
            <Header/>
                <ItemDetail remera={productos}/>
            <Footer/>
        </div>
    )
}

export default ItemDetailContainer;