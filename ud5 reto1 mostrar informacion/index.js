const url= "https://restcountries.com/v3.1/all?fields=capital,name,region,population";
/* referenciamos buscador */
const buscador=document.getElementById('paises');
/* creamos funcion informacion asincrona */
let informacion=async()=>{
    
    const response = await fetch(url)
    if (!response.ok) {
      throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    
   /* hacemos un evento de input y llamara a la funcion tabla mientras hagamos cambios en el input */
    buscador.addEventListener('input',()=>{
        /* la funcion tendra el buscador y la respuesta del servidor */
        tabla(data,buscador);
    });
   
    return data
}
informacion();
/* funcion tabla */
let tabla=(data,buscador)=>{
    /* reseteamos resultado para que no se acumulen tablas */
    /* creamos elementos necesarios y los insertamos en tabla */
 document.getElementById('resultado').innerHTML="";
    const table=document.createElement('table');
    table.classList.add('tabla')
    const th1=document.createElement('th');
    const th2=document.createElement('th');
    const th3=document.createElement('th');
    const th4=document.createElement('th');
    let tr2=document.createElement('tr');
    th1.innerHTML='Nombre';
    th2.innerHTML='Capital';
    th3.innerHTML='Region';
    th4.innerHTML='Poblacion';
    tr2.appendChild(th1);
    tr2.appendChild(th2);
    tr2.appendChild(th3);
    tr2.appendChild(th4);

    table.appendChild(tr2);
   
/* recorremos los elementos de la respuesta */
data.forEach(element=>{
/* si el nombre del elemento empieza por la letra del valor del buscador */
    if(element.name.common.toLowerCase().startsWith(buscador.value.toLowerCase())){
        /* crearemos las filas y td */
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
/* damos clase a las celdas para despues agregar css */
    td1.classList.add('celda');
    td2.classList.add('celda');
    td3.classList.add('celda');
    td4.classList.add('celda');

     td1.innerHTML=element.name.common
/* y pondremos en cada celda los valores necesarios que queremos mostrar */
     td2.innerHTML=element.capital;
     td3.innerHTML=element.region;
     td4.innerHTML=element.population;
/* insertamos las celdas en la fila y la fila en la tabla */
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);
     table.appendChild(tr);
    }
    });
    /* insertamos en el div del html la tabla */
    document.getElementById('resultado').appendChild(table)
}
