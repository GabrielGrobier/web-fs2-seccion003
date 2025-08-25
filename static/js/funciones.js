export function sumar(n1 , n2){
    let resultado = n1 +n2
    console.log(resultado)

}

let usuariosAdmin = {
    nombre:"gabriel grobier",
    usuario:"gabo",
    password:"gabo123ñ",
    estado:true
}

//destructuring 
console.log(usuariosAdmin.nombre)
const {nombre, usuario, password , estado } = usuariosAdmin
console.log(nombre, usuario)

//let usuarioInput =  document.getElementById("UserLabel").value
let usuarioInput = document.querySelector("#UserLabel") //cuando quiero capturar 1 elemento ya sea por su id o clase 
//let usuarioinput2  = document.querySelectorAll(".etiquetas a") // cuando quiero campturar multiples elementos por su clase 
//console.log(usuarioinput)

let titulos = document.querySelector(".titulos")
titulos.addEventListener('click',function(){
    titulos.textContent = "Hiciste Click en el titulo "
})


