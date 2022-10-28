const contenendor = document.querySelector("#resultados");

//constructor
function pokemon(id, nombre, altura, peso, tipo, formas, habilidades, ubicacion, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
    this.tipo = tipo;
    this.formas = formas;//pendiente
    this.habilidades = habilidades;
    this.ubicacion = ubicacion;//pendiente
    this.imagen = imagen;
}

function busqueda(){

    let id = document.getElementById("tag").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) =>{ CrearPokemon(data)})
};  