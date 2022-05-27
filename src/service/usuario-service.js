import Service from './service';

import Swal from 'sweetalert2';

const usuarioMock = {
    id : 1,
    nome : "fulano de tal",
    email : "fulano@exemplo.com",
    senha: "123456",
    perfil : {
        id : 1,
        descricao: "manager"
    }
};

const autenticado = {
    token: "tokenacesso",
    usuario: usuarioMock,
    senha: "123456"
};



function login(email, senha){
       return new Promise((resolve, reject) => {
        if (email == "exemplo@exemplo.com" && senha == "123456") {
           
                resolve(autenticado).then(response => {
                console.log(response);
                  window.open("/", "_self")

            })
}
            Promise.reject().catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'OPS!',
                color: 'white',
                background: 'black',
                text: 'Usuario ou Senha Invalidos!'
                })
            })  
        
            })
            
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
}

