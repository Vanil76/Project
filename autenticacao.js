function autenticar(){
    let usuario = document.getElementById("username").value
    let senha = document.getElementById("password").value
    if (usuario == "usuario@hotmail.com" && senha == "123456"){
        alert("Você está logado!")
    } else {
        alert("Usuário ou senha incorreta")
    }
}