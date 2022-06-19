import React from 'react'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import EsqueceuSenha from './pages/EqueceuSenha'




const Tela = () =>{
    return(
      
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />

            </Routes>
       
    )
}

export default Tela;