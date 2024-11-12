import Ususario from "../../entity/Usuario";
import "./login.css";

document.getElementById('cadastrar').addEventListener("click",(event: MouseEvent)=>{
    event.preventDefault();

    var nome = document.getElementById("name") as HTMLInputElement;
    var data_nascimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email")as HTMLInputElement;
    var password = document.getElementById("password")as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation")as HTMLInputElement;

    
    console.log(password.value)
    console.log(passwordConfirmation.value)
    console.log(nome.value)
    console.log(data_nascimento.value)
    console.log(email.value)

    if(password.value !== passwordConfirmation.value){
        console.log("SENHAS NÃO COFEREM...")
        return;
    } 
    
    var usuario = new Ususario(nome.value, email.value, password.value, new Date(data_nascimento.value))
    console.log(usuario);
    
    (window as any).bancoAPI.crateUsuario(usuario);
      //criar repositorio
    //verificar se o usuario com e-mail já existe
    //inserir no banco

})
