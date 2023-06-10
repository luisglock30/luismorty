alert("hola mundo");

// //prompt para ingresar valores del usuarios
// var luis=prompt("luis")

// //alert para mostrar mensaje al usuario
// //alert(luis + "Bienvido consumir la api derick and Morty")
// var numero = parseInt(prompt("ingrsa un numero"
// )
// ); // convirte un string a un numero entero
// var numero2 = parseInt(
//     prompt("ingresa otro numero"
//     )
// ); //convirte un string a un numero entero

// var suma=numero + numero2
// alert("la suma de los numeros es:" + suma)



//parseInt("");//convirte un string a un numero entero
personajes(mostrarDatos)
function personajes(done) {
    const url="https://rickandmortyapi.com/api/character";
    fetch(url)
    .then(resp => resp.json())
    .then(data => done(data))
    .catch(error => console.log(error))
    .finally(()=>console.log('finalizo'));

}


function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}
