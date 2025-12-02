/* referenciamos variables */
const valor=document.getElementById('id');
const boton=document.getElementById('boton')
/* hacemos evento click para primero verificar si se ha validado o no */
boton.addEventListener('click',(e)=>{
e.preventDefault();
/* si se ha validado no llamara a la funcion si no la llamara */
if(validar(valor)){
pideDatos();
}

})

async function pideDatos() {
    try{
        /* guardamos id en la constante */
  const id=document.getElementById('id').value
  /* hacemos la peticion */
  const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
  if (!response.ok) {
    throw `Error ${response.status} de la BBDD: ${response.statusText}`
  }

  const Data = await response.json(); 
  console.log(Data);
  /* llamamos a la funcion card que tratara nuestra respuesta */
  card(Data);
 
  return Data;

  
 } catch(error){
console.error("error al mostrar datos"+error.message);

  }
}
/* validamos input y respondemos en caso de que no sea valido */
function validar(valor){

if(!valor.checkValidity()){
document.getElementById('resultado').innerHTML="";
document.getElementById('error').innerHTML=valor.validationMessage;
document.getElementById('error').style.color='red';
return false;
}
return true;
}
/* en la funcion carta devolveremos los datos en un formato personalizado */
function card(Data) {

document.getElementById('error').innerHTML="";
document.getElementById('resultado').innerHTML=`<h1>${Data.result.properties.name}</h1>
<p>altura:${Data.result.properties.height}</p><p>masa:${Data.result.properties.mass}</p><p>genero:${Data.result.properties.gender}</p>`;
  
}

