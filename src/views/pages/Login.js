import React from "react";
import "./css/Login.css"
import {Link} from "react-router-dom";



const Login = () => {
    return ( 
        
      <div className='container-login'>
      <form className='form-login'>
          <h2 class="title-login" >LOGIN</h2>
          <input id="login-email" type="email" placeholder="Digite seu e-mail" />
          <input id="login-senha" type="password" placeholder='Insira sua senha' />
          <br />
          <input id="login-submit" type="submit" class="enviar" value="Entrar"  />
          <Link exact to="/esqueceu-senha"><input id='cadastro-submit'type="submit" class="enviar" value="Esquecia a Senha"  /></Link>
      </form>

</div>

     );
}
 
export default Login;