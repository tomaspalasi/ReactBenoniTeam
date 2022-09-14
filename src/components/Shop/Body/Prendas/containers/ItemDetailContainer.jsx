import ItemDetail from "../items/ItemDetail";
import {remeras} from '../../../../../mock/remeras'
import Header from "../../../../Header/Header";
import Footer from '../../../../Footer/Foter'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {id} = useParams();
    let idRemera = parseInt(id)
    
    const remera = remeras.find((rem) => rem.id === idRemera);

    return (
        <div>
            <Header/>
                <ItemDetail dtl={remera}/>
            <Footer/>
        </div>
    )
}

export default ItemDetailContainer;