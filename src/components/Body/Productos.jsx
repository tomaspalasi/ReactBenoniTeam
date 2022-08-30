import { Component } from "react";

class Remera extends Component {
    render (){
        return (
            <li>
                <p>{this.props.nombre}</p>
            </li>
            )
    }
}

export default Remera;