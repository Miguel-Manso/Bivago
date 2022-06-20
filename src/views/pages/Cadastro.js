import React from 'react';
import './css/Cadastro.css';


const Cadastro = () => {
    return ( 
        <>
            <div className='container-cadastro'>
                    <form  className='form-cadastro'>
                        <h2 class="title-cadastro" >CADASTRO</h2>
                        <input id='cadastro-nome' type="text" placeholder="Digite seu nome" />
                        <input id='cadastro-tel'type="tel" placeholder="Número de celular" />
                        <input id='cadastro-email'type="email" placeholder="Digite seu e-mail" required maxLength={25}/>
                        <input id='cadastro-senha'type="password" placeholder='Criar uma senha' />
                        <input id='cadastro-senha'type="password" placeholder='Repetir sua senha' />
                        <br />
						
                
                    </form>
					

					
             
            </div>
        </>
     );
}
export default Cadastro;

