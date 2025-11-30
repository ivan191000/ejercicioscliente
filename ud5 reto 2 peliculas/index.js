/* instanciamos buscador */
const buscador=document.getElementById('buscador');

const apiKey='a690dd72';
/* funcion asincrona te peticion y respuesta */
async function pideDatos() {
/* utilizamos un array donde gurdaremos los datos de respuesta */
    let resultados=[];
/* utilizamos un bucle para que vaya recorriendo todas las paginas */
    for(let page=1;;page++){
  const response = await fetch(`https://www.omdbapi.com/?s=movie&y=2024&page=${page}&apikey=${apiKey}`);
  
  if (!response.ok) {
    throw `Error ${response.status} de la BBDD: ${response.statusText}`
  }
  const Data = await response.json(); 
  console.log(Data);
  /* si la respuesta es false el bucle se detendra */
  if(Data.Response=='False'){

console.log('fin');
break;
  }
  /* iremos metiendo todos los datos en resultados */
  resultados.push(...Data.Search);
  /* llamamos una vez mas a la funcion para que de primeras nos aparezcan todas las peliculas */
  ficha(resultados)
}
/* evento de input que llamara a funcion ficha cada vez que escribamos en el buscador */
buscador.addEventListener('input',()=>{
  ficha(resultados)
  })
  
  return Data;
}
/* llamamos a la funcion principal */
pideDatos();
/* funcion ficha */
let ficha=(Data)=>{
  /* instanciamos el div donde iran todos los divs que creemos */
    const resultado=document.getElementById('resultado');
    /* borraremos resultado para que las nuevas busquedas se actualicen */
    resultado.innerHTML="";
/* recorremos los elementos */
    Data.forEach(element => {
        /* si el buscador esta vacion o los titulos de las peliculas contienen la letra que escribamos en el buscador haremos lo siguiente... */
if(buscador.value==""||element.Title.toLowerCase().includes(buscador.value.toLowerCase())){
    /* creamos para cada elemento un div */
        const div=document.createElement('div');
        /* le añadimos una clase ficha */
        div.classList.add('ficha');


/* en el div agregamos el titulo,imagen,y fecha y le añadimos clases para retocarlas en el css */
        div.innerHTML+=`<h5>${element.Title}</h5><img src=${element.Poster} class='foto'> <span class='anio'>fecha de estreno:${element.Year}</span>`;

 /* insertamos los divs en el div del html */
        resultado.appendChild(div);
}
    });

}