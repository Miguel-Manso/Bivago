import React from "react";
import "./cssComponents/Footer.css"
import Logo from '../assets/bivago-logo.png';



const Footer = () => {
    return(
        <div className="container-footer">
        <footer>
        <h2 id="item-about"><b>&nbsp;&nbsp;SOBRE NÓS</b></h2>
        <br></br>
        <p id="item-paragraph">Bivago é um site voltado para a viagem e o turismo.
        Que tal explorar o seu mundo enquanto paga barato e ainda se divertir!</p>
        <br></br>
        <img id="item-logo" src={Logo} alt="logo" />
        </footer>
        </div>
    )
}

export default Footer;