
document.addEventListener('DOMContentLoaded',function(){
    const opcion=document.getElementById('opcion');
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const input=document.getElementById('id');
        const opcion=document.getElementById('opcion');
        const id=document.querySelector('#id');

        input.value==""?allData(opcion.value):pideDatos(opcion.value,id.value);

    })
})

async function pideDatos(opcion,id) {
    try{
  const response = await fetch(`https://www.swapi.tech/api/${opcion}/${id}/`);
  if (!response.ok) {
    throw `Error ${response.status} de la api: ${response.statusText}`
  }
  const myData = await response.json(); 
  console.log(myData)

  const resultado=document.getElementById('resultado');
        const div=document.createElement('div');
        div.classList.add('etiqueta');

  switch (opcion) {
    case 'people':
        document.getElementById('resultado').innerHTML="";

        div.innerHTML=`
        
        <p>${myData.result.properties.name}</p>
        <p>${myData.result.properties.height}</p>
        <p>${myData.result.properties.mass}</p>
        
        `
        resultado.appendChild(div)
        break;
    case 'films':
        document.getElementById('resultado').innerHTML="";

        div.innerHTML=`
        
        <p>${myData.result.properties.title}</p>
        <p>${myData.result.properties.release_date}</p>
        
        `
        resultado.appendChild(div)

        break;
    case 'planets':
        document.getElementById('resultado').innerHTML="";

        div.innerHTML=`
        
        <p>${myData.result.properties.name}</p>
        <p>${myData.result.properties.terrain}</p>
        <p>${myData.result.properties.climate}</p>
        <p>${myData.result.properties.diameter}</p>
        
        `
        resultado.appendChild(div)
        break;
    case 'starships':
        document.getElementById('resultado').innerHTML="";

        div.innerHTML=`
        
        <p>${myData.result.properties.name}</p>
        <p>${myData.result.properties.model}</p>
        <p>${myData.result.properties.passengers}</p>
        
        `
        resultado.appendChild(div)

        break;
    case 'species':
    document.getElementById('resultado').innerHTML="";

        div.innerHTML=`
        
        <p>${myData.result.properties.name}</p>
        <p>${myData.result.properties.language}</p>
        <p>${myData.result.properties.created}</p>
        
        `
        resultado.appendChild(div)
  }
  return myData;
}catch(error){
console.log(error)
}
}

async function allData(opcion) {
    let resultados=[];
   switch (opcion) {
    case 'people':
        document.getElementById('resultado').innerHTML="";
        const res=await fetch(`https://www.swapi.tech/api/people`);
const data=await res.json();
const totalPages=data.total_pages;

for (let page=1; page<=totalPages; page++) {
    const resPage=await fetch(`https://www.swapi.tech/api/people?page=${page}&limit=10`);
    const dataPage=await resPage.json();
    console.log(dataPage)
    resultados.push(...dataPage.results);
}
resultados.forEach(element => {
const div=document.createElement('div');
        div.innerHTML+=` 
        <p>${element.name}</p>
        `
        resultado.appendChild(div)
    
});
        break;
   case 'films':
    document.getElementById('resultado').innerHTML="";
    
    const res2=await fetch(`https://www.swapi.tech/api/films`);
const data2=await res2.json();
const totalPages2=data2.result;

console.log(totalPages2)
totalPages2.forEach(element => {
const div=document.createElement('div');
        div.innerHTML+=` 
        <p>${element.properties.title}</p>
        `
        document.getElementById('resultado').appendChild(div)
    
});
break;
case 'planets':
     const res3=await fetch(`https://www.swapi.tech/api/planets`);
const data3=await res3.json();
console.log(data3)
const totalPages3=data3.results;
totalPages3.forEach(element=>{

    const div=document.createElement('div');
        div.innerHTML+=` 
        <p>${element.name}</p>
        `
        document.getElementById('resultado').appendChild(div)

})
case 'starships':
    
    const res4=await fetch(`https://www.swapi.tech/api/starships`);
const data4=await res4.json();
console.log(data4.total_pages);
const totalPages4=data4.total_pages;

for (let page=1; page<=totalPages4; page++) {
    const resPage=await fetch(`https://www.swapi.tech/api/starships?page=${page}&limit=10`);
    const dataPage=await resPage.json();
    console.log(dataPage)
    resultados.push(...dataPage.results);
}
resultados.forEach(element=>{
    document.getElementById('resultado').innerHTML+=`<p>${element.name}</p>`
})
    break;
case 'species':
    const res5=await fetch(`https://www.swapi.tech/api/species`);
const data5=await res5.json();
console.log(data5);
let totalPages5=data5.total_pages;
    
for (let page=1; page<=totalPages5; page++) {
    const resPage=await fetch(`https://www.swapi.tech/api/species?page=${page}&limit=10`);
    const dataPage=await resPage.json();
    console.log(dataPage)
    resultados.push(...dataPage.results);
}
resultados.forEach(element=>{
    document.getElementById('resultado').innerHTML+=`<p>${element.name}</p>`
})

  
}
}


    




