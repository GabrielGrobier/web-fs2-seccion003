console.log("se cargo correctamente mi script ")
let usuariosAdmin = {
    "nombre":"gabriel grobier",
    "usuario":"gabo",
    "password":"gabo123ñ",
    "estado":true
}

localStorage.setItem("DatosUsuario",JSON.stringify(usuariosAdmin))

window.onload = function(){
    if (window.location.pathname.endsWith("home.html")){
        let usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"))
        if (usuarioLogeado.estado){
            document.getElementById("tituloHome").textContent = "Bienvenido " + usuarioLogeado.nombre
        }
    }
   
}
//funcion 
function saludo2(){
    console.log("Estoy saludando desde una funcion ")
}

//Accendiendo al valor de nombre del diccionario 
console.log(usuariosAdmin.nombre)
if (usuariosAdmin.estado){
    console.log("El usuario es valido ")
    saludo2()

}
else{
    console.log("el usuario es no valido ")
}
function datosUsuario(){
    let inputUsuario = document.getElementById("UserLabel").value
    let password = document.getElementById("inputPassword6").value
    // and = && y OR = || 
    if (inputUsuario == "" || password == ""){
        alert("Los campos no pueden estar vacios ")
    }

    else if (inputUsuario.length <3 && password.length < 3) {
        alert("los datos ingresado deben ser mayor a 3 ")}

    else if(inputUsuario == usuariosAdmin.usuario && password == usuariosAdmin.password){
        let usuarioLogeado ={
            "nombre":usuariosAdmin.nombre,
            "estado":usuariosAdmin.estado
        }
    
        localStorage.setItem("usuarioLogeado",JSON.stringify(usuarioLogeado))
        window.location.href="home.html"
    }

    }






