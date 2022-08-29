import { Component } from "react";

class Remera extends Component {
    render (){
        return (
            <li>
                <a href="#">{this.props.nombre}</a>
                </li>
            )
    }
}

export default Remera;