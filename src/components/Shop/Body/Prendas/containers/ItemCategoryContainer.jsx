import Header from "../../../../Header/Header";
import Footer from '../../../../Footer/Foter'
import ItemListContainer from "./ItemListContainer";

const ItemCategoryContainer = () => {
    const titulo = "BENONI TEAM - C.E.A.R.D.";
    const descripcion = "Bienvenidos a la tienda de BENONI. Acá vas a poder conseguir toda la merch del equipo de BENONI.";

    return (
        <div>
            <Header/>
                <div className= "contenedor">
                    <div className="contenido">
                    <h1 className="titulo">{titulo}</h1>
                    <p className="descripcion">{descripcion}</p>
                        <ul>
                            <ItemListContainer/>
                        </ul>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}


export default ItemCategoryContainer;