import React from "react";
import Banner from "../../assets/banner1.jpg"
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import "./css/Home.css"


const Home = () => {
    return (
        <React.Fragment>
        <div className="container-home">
        <NavBar />
        <img id="item-banner" src={Banner} alt="banner"/>
        </div>  
        <Footer />
        </React.Fragment>
        
        
        
        
        
    );
        
}

export default Home;