//api mascotas 
const url = "https://huachitos.cl/api/animales"

const consultarapi = async () =>{
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    console.log(data["data"])
    mostrarAnimales(data["data"])
}
consultarapi()

const mostrarAnimales = (animales) =>{
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = "" //limpiar contenedor 

    animales.forEach( animal =>{
        const card = document.createElement("div")
        card.classList.add("col-md-4")
        card.innerHTML= `<div class = "card shadow-sm">
                        <img src="${animal.imagen}" class="card-img-top" alt="${animal.nombre}">
                        <div class ="card-body">
                        <h5 class="card-title">${animal.nombre}</h5>
                        <p class="card-text">Tipo : ${animal.tipo}</p>
                        <p class="card-text">Edad : ${animal.edad}</p>
                        <p class="card-text">Comuna : ${animal.comuna}</p>
                        <p class="card-text">Estado : ${animal.estado}</p>
                        <a href="${animal.url}">ver mas </a>
                        </div>
                        </div>
                        `

        contenedor.appendChild(card)
    })

}