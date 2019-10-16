import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Audio from './Audio.jsx';
import '../../styles/basic/header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
      }
    
  
    
    render() {

        let menu_nav=(
                <ul className="cnt_lista">
                    <Link to="/"><img className="logo_nav"  src='https://res.cloudinary.com/caavat/image/upload/v1571180101/rappi/Logo_st-01.png' alt="Logo" /></Link>
                    <Link to="/" style={{ textDecoration: 'none' }}><li onClick={this.props.scrollToProducts}>Peliculas</li></Link>
                    <Link to="/characters" style={{ textDecoration: 'none' }}><li>Personajes</li></Link>
                    <Audio/>
                </ul>);
        
        return (
            <div className="contenerdor_nav" >
                
                <div className="logo_nav"></div>
                <div >
                    {menu_nav}
                </div> 
            </div>
        )
    }
}
