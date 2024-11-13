import { hash } from "bcrypt";
import "./login.css";

document.getElementById('cadastrar').addEventListener("click",async (event: MouseEvent)=>{
    event.preventDefault();

    var nome = document.getElementById("name") as HTMLInputElement;
    var data_nacimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email")as HTMLInputElement;
    var password = document.getElementById("password")as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation")as HTMLInputElement;

    
    console.log(password.value)
    console.log(passwordConfirmation.value)
    console.log(nome.value)
    console.log(data_nacimento.value)
    console.log(email.value)

    if(password.value !== passwordConfirmation.value){
        console.log("SENHAS NÃO COFEREM...")
        return;
    } 

    const usuarioExiste = await (window as any).bancoAPI.findByEmail(email.value);
    if(usuarioExiste?.id){
      console.log("ja existe")
      return;
    }
    var usuario = {
      name: nome.value,
      email: email.value,
      password: password.value,
      data_nacimento: new Date(data_nacimento.value)
    };
    


    await (window as any).bancoAPI.crateUsuario(usuario);
    //verificar se o usuario com e-mail já existe

})


document.getElementById('acessar').addEventListener("click",async (event: MouseEvent)=>{
  event.preventDefault();

  var email = document.getElementById("email_login")as HTMLInputElement;
  var password = document.getElementById("password_login")as HTMLInputElement;

  console.log(email.value)
  console.log(password.value)

  const usuario = await (window as any).bancoAPI.findByEmail(email.value)
  if(!usuario){
    console.log("USUARIO NAO EXISTE")
    return;
  }

  const passwordConfirmation = {
    password: password.value,
    password_hash: usuario.password_hash
  };

  const validPassworld = await (window as any).authAPI.hash(passwordConfirmation);

  if(!validPassworld){
      console.log("CREDENCIAIS INCORRETAS....")
      return;
  }
  
  (window as any).navigateAPI.irPaginaHome();


} )