import React from "react";
import './cssComponents/NavBar.css';
import Logo from '../assets/bivago-logo.png';
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(<>
        <div className="container-nav">
            <nav>
             <Link exact to="/"><img id="item-logo" alt="Logo" src={Logo}/></Link>
                <div className='item-nav'>
                   <div className="item-nav-right">
                        <ul id="item-text-login">
                           <Link exact to="/login"><button id="btn-login">&nbsp;Login&nbsp;</button></Link>
                        </ul>     
                                        
                        <ul id="item-text-cadastro" >
                            <Link exact to="/cadastro"><button id="btn-cadastro">&nbsp;Cadastro&nbsp;</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
        
        
    </>);
} 

export default NavBar;