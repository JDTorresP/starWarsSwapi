import React, { Component } from 'react';
import '../../styles/basic/buMenu.css';
import { Link } from "react-router-dom";

export default class BuMenu extends Component {
    handleClick(){
        document.getElementById("toggle").checked = false;
    }
    render() {
        return (
            <header>
                <input type='checkbox' id='toggle' style={{display:'none'}} />
                <label class='toggle-btn toggle-btn__cross' for='toggle'>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </label>
                    <nav>
                        <ul>
                        <Link to="/" style={{ textDecoration: 'none' }}><li onClick={()=>this.handleClick()}>Productos</li></Link>
                        <Link to="/Nosotros" style={{ textDecoration: 'none' }}><li onClick={()=>this.handleClick()}>Nosotros</li></Link>
                        <Link to="/Garantia" style={{ textDecoration: 'none' }}><li onClick={()=>this.handleClick()}>Garantia</li></Link> 
                        <Link to="/Contacto" style={{ textDecoration: 'none' }}><li onClick={()=>this.handleClick()}>Contacto</li></Link>
                        </ul>
                    </nav>
            </header>
        )
    }
}
