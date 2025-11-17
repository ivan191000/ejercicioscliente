/* hacemos un addEventListener del boton para ejecutar todos los ifs una vez hagamos click */
const boton=document.getElementById("boton");
boton.addEventListener("click",(event)=>{
    
    event.preventDefault();
  
    /* referenciamos cada elemento input y lo guardamos en const */
    const inputId=document.getElementsByTagName("input")[0];
    const inputNombre=document.getElementsByTagName("input")[1];
    const inputFecha=document.getElementsByTagName("input")[2];
    const inputCorreo=document.getElementsByTagName("input")[3];
    const inputTelefono=document.getElementsByTagName("input")[4];
    const selecciona=document.getElementById("select");
    const check=document.getElementById("check");
/* referenciamos cada span de error en sus respectivas const */
    const errorId=document.getElementById("errorId");
    const errorNombre=document.getElementById("errorNombre");
    const errorFecha=document.getElementById("errorFecha");
    const errorCorreo=document.getElementById("errorCorreo");
    const errorTelefono=document.getElementById("errorTelefono");
    const errorSeleccion=document.getElementById("errorSeleccion");
    const errorCheck=document.getElementById("errorCheck");

    
      
    
   /* mediante if comprobamos si ese input es o no valido */
   if(!inputId.checkValidity()){
    /* si no lo es mostrara el mensaje de error proporcionado por el navegador en rojo */
   errorId.innerHTML=inputId.validationMessage;
   errorId.style.color="red";
   }
   else{
    /* si lo es se le aplica estilo de borde al input correspondiente y eliminamos el mensaje de error si por lo que sea ha habido un error */
    inputId.style.border="2px solid green";
    errorId.innerHTML="";
   }
/* asi sucesivamente vamos comprobando campo tras campo */
   if(!inputNombre.checkValidity()){
    errorNombre.innerHTML=inputNombre.validationMessage;
    errorNombre.style.color="red";

   }
   else{
    inputNombre.style.border="2px solid green";
    errorNombre.innerHTML="";

   }
   
   if(!inputFecha.checkValidity()){
    errorFecha.innerHTML=inputFecha.validationMessage;
    errorFecha.style.color="red";
   }
   else{
    inputFecha.style.border="2px solid green";
    errorFecha.innerHTML="";
   }
   if(!inputCorreo.checkValidity()){
    errorCorreo.innerHTML=inputCorreo.validationMessage;
    errorCorreo.style.color="red";
   }
   else{
    inputCorreo.style.border="2px solid green"
    errorCorreo.innerHTML="";
   }
   if(!inputTelefono.checkValidity()){
    errorTelefono.innerHTML=inputTelefono.validationMessage;
    errorTelefono.style.color="red";

   }
   else{
    inputTelefono.style.border="2px solid green";
    errorTelefono.innerHTML="";
   }

   if(selecciona.value=="selecciona"){
    errorSeleccion.innerHTML="selecciona opcion valida";
    errorSeleccion.style.color="red";


   }
   else{
    selecciona.style.border="2px solid green";
    errorSeleccion.innerHTML="";
   }
   if(!check.checked){
    errorCheck.innerHTML="selecciona la casilla";
    errorCheck.style.color="red";

   }
   else{
    check.style.border="2px solid green";
    errorCheck.innerHTML="";
   }
   

  


})


