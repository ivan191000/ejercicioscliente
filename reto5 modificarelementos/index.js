/* creamos constante imagenes y guardamos todas las imagenes en el */
const imagenes=document.querySelectorAll("img");
/* hacemos un foreach de imagenes junto adventlistener para
cuando posemos el raton encima de la imagen funcione como un hover y devolveremos 
el nombre de id correspondiente a la imagen correspondiente por el span con id informacion */
imagenes.forEach(img=>img.addEventListener("mouseenter",()=>{

    document.getElementById("informacion").innerHTML=img.id;

}))
/* funcion reset para resetear bordes */
let reset=()=>{
    imagenes.forEach(img=>{
        img.style.border="none"
    })
}
/* hacemos un evento click para el boton familia */
document.getElementById("familia").addEventListener("click",()=>{
/* llamamos a la funcion para eliminar bordes que no pertenezcan a este boton */
    reset()
/* recorremos imagenes y mediante un if ponemos la condicion y las imagenes se seleccionaran con borde rojo */
    imagenes.forEach(img=>{

        if(img.id=="Homer"||img.id=="Marge"||img.id=="Bart"||img.id=="Maggie"||img.id=="Lisa"){
            img.style.border="4px solid red"

        }
    })
})
/* hacemos lo mismo en este caso solo que las imagenes correspondientes se seleccionaran con borde azul */
document.getElementById("personaje").addEventListener("click",()=>{

    imagenes.forEach(img=>{
        img.style.border="4px solid blue"
    })
})
document.getElementById("colegio").addEventListener("click",()=>{
    reset()
    imagenes.forEach(img=>{
        if(img.id=="Bart"||img.id=="Lisa"){
            img.style.border="4px solid purple"

        }
    })
})
/* hacemos el evento click de la funcion reset para cuando pulsemos reset se resete todas las selecciones */
document.getElementById("reset").addEventListener("click",reset)