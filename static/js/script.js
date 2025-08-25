import { sumar as funcionSumar  } from "./funciones.js"

funcionSumar(2,3)
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




function registroUsuario(){
    let nombreCompleto = document.getElementById("nombreCompleto").value
    let correoElectronico = document.getElementById("correoElectronico").value
    let password1 =document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    //variable de estado 
    let existe = false 
    //construccion de array 
    /*
    esta obteniendo los datos si hay , si no es un array vacio 
    */
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i< usuarios.length; i++){
        if (usuarios[i].correoElectronico === correoElectronico){
            existe = true
            break;
        }
    }

    if (correoElectronico == "" || nombreCompleto == "" || password1 == "" || password2 == ""){
        alert("Todos los campos deben ser llenados")
    }
    else if(password1 != password2){
        alert("Las contraseñas no coinciden ")

    }
    else if(existe){
        alert("El correo ingresado ya esta registrado")

    }
    else{
        usuarios.push({nombreCompleto,correoElectronico,password1})
        localStorage.setItem("usuarios",JSON.stringify(usuarios))
    }





}


let titulos = document.querySelector(".titulos")
console.log(titulos)
titulos.addEventListener('mouseenter',function(){
    titulos.textContent = "Entraste el titulo  el titulo "
})
titulos.addEventListener('mouseleave', function(){
    titulos.textContent = "Saliste del titulo "
})


