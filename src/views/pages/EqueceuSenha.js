import React from 'react';
import './css/EsqueceuSenha.css';

const EsqueceuSenha = () => {
    return ( 
        
      <div className='container-esqsenha'>
      <form className='form-esqsenha'>
          <h2 class="title-esqsenha" >ESQUECEU A SENHA?</h2>
          <p id="paragraph-esqsenha">Esqueceu sua senha? Informe seu e-mail e dentro
          dos próximos segundos o enviaremos um link para que você possa mudar sua senha.</p>
          <input id="esqsenha-email" type="email" placeholder="Digite seu e-mail" />
          <br />
          <input id="esqsenha-submit" type="submit" class="enviar" value="Enviar"  />
      </form>

</div>

     );
}
 
export default EsqueceuSenha;
