import React, {useState} from 'react';
import Swal from 'sweetalert2';
import {Input, Button} from '../../styles/form-styles';
import { DivPersonalizada } from '../../styles/geral-styles';
import InputText from '../../components/InputText';
import usuarioService from '../../service/usuario-service';
const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validarlogin = () => {
       usuarioService.login(email, senha) 
                Swal.fire({
                icon: 'info',
                color: 'white',
                background: 'black',
                title: 'Olá Bem Vindo! :)',
                text: 'Você sera redirecionado para tela principal!'
    })
            .then(response => {
                console.log(response)
                window.open("/", "_self")
                
                Promise.catch(error => {
                    console.log(error)
                })
            })
            
    }
    return (
        <DivPersonalizada
         width="380px" 
         background="white" 
         position="absolute" 
         top="50%" 
         left="50%"
         transform="translate (-50% -50%)" 
         color="black" 
         padding="50px"
         >
            <h1>Login</h1>
        
        <InputText
        id="email"
        text="E-mail"
        placeholder="exemplo@exemplo.com"
        function = {(e)=> setEmail(e.target.value)}>
        </InputText>

        <InputText
        id="senha"
        text="Senha"
        placeholder="123456"
        type="password"
        function = {(e)=> setSenha(e.target.value)}>
        
        </InputText>

        <Button 
        onClick={validarlogin}>
        <h4>Entrar</h4>
        </Button>
    

        <div className='esqueci-senha'>
            <a href='#'>Esqueci minha senha</a>
        </div>
    
        </DivPersonalizada>
       
        
    

    );

}


export default Login;
/* 
    1º Importar os componentes que precisamos para o projeto
    1.1 Style Component

    2º Aprender a trabalhar com requisicoes AJAX (http)
    2.2 Axios, fech API

    3º  Aprender a utilizar o localstorage
    
    4º A Trabalhar com Hook principalmente o (useState e useEffect)
*/

