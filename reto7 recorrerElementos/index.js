/* referenciamos el boton */
const boton=document.getElementById("boton");

boton.addEventListener("click",(e)=>{
    /* hacemos evento click y ponemos preventdefault para no actualizar la pagina */
e.preventDefault();
/* inicializamos elementos sin nada para luego metes los valores del options */
    let elementos="";
    /* reseteamos la respuesta para volver a utilizar */
    document.getElementById("respuesta").innerHTML="";
/* creamos elemento ol para que la lista sea ordenada*/
    const ol=document.createElement("ol");
    /* hacemos un queryselector de todos los elementos que recorreremos con foreach */
    document.querySelectorAll("label,input,select,textarea,button").forEach(e=>{
        /* creamos elemento li */
    const li=document.createElement("li");
/* si el elemento es un input o boton se le añadira al li crreado la informacion correspondiente */
    if(e.tagName=="INPUT"||e.tagName=="BUTTON"){
    li.innerHTML=e.tagName+".Tipo:"+(e.type||"no tiene")+" Nombre:"+(e.name||"no tiene")+" Clase:"+(e.className||"no tiene")+" Id:"+(e.id||"no tiene")+" Valor:"+(e.value||"no tiene");
    }
    /* igual para el label */
    if(e.tagName=="LABEL"){
    li.innerHTML=e.tagName+"Nombre:"+(e.name||"no tiene")+" Clase:"+(e.className||"no tiene")+" Id:"+(e.id||"no tiene")+" Atributo for:"+e.getAttribute("for");
    }
    /* igual para el select */
    if(e.tagName=="SELECT"){
        /* aqui hacemos un foreach de los elementos option y guardamos los valores en la variable elementos que teniamos inicializada */
        document.querySelectorAll("option").forEach(el=>{
            elementos+=el.value+" ";
    li.innerHTML=e.tagName+".Tipo:"+(e.type||"no tiene")+" Nombre:"+(e.name||"no tiene")+" Clase:"+(e.className||"no tiene")+" Id:"+(e.id||"no tiene")+" Valor:"+(elementos||"no tiene");
        });
    }
/* insertamos la lista en el ol creado */
    ol.appendChild(li);
    /* y mandamos el ol al div de id respuesta que tenemos en el html */
    document.getElementById("respuesta").appendChild(ol);
})
});