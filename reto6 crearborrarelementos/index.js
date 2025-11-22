/* referenciamos elementos necesarios */
const titulo=document.getElementById("titulo");
const url=document.getElementById("url");
const descripcion=document.getElementById("descripcion");
const resultado=document.getElementById("resultado");
/* evento click al darle a enviar que realixa las acciones necesarias*/
document.getElementById("boton").addEventListener("click",(e)=>{
/* esto hara que no se actualice la pagina */
    e.preventDefault();
/* condiciones por si algun campo no esta relleno */
    if(titulo.value==""||url.value==""||descripcion.value==""){
return document.getElementById("error").innerHTML="introduce valores en todos los campos";
    }
    else{

    /* en caso de que todos los campos esten completos */
/* creamos un div */
    const div=document.createElement("div");
/* le añadimos clase donde daremos estilo  */
    div.classList.add("divStyle");
/* creamos elemento h1 donde introducimos el titulo correspondiente */
    const ti=document.createElement("h1");
    ti.innerHTML=titulo.value;
/* insertamos el titulo en el div creado */
    div.appendChild(ti);
/* creamos elemento img */
    const img=document.createElement("img");
    /* añadiremos la url introducida */
    img.src=url.value;
    
/* insertamos en el div creado la img */
    div.appendChild(img);
/* creamos elemento p para descripcion */
    const desc=document.createElement("p");
    /* añadimos descripcion */
    desc.innerHTML=descripcion.value;
/* insertamos en el div desc */
    div.appendChild(desc);
    /* una vez hecho insertamos en el div resultado que tenemos referenciado el div creado */
    resultado.appendChild(div);

    }
/* aqui eliminaremos el mensaje de error si ha ocurrido y reseteamos los campos */
    document.getElementById("error").innerHTML="";
    titulo.value="";
    url.value="";
    descripcion.value="";




})