/* referenciamos elementos de html en este caso boton e inputs */
const boton=document.getElementById("boton");
const input=document.getElementById("fecha");
const inputCocinero=document.getElementById("cocinero");
const inputDestinatario=document.getElementById("destinatario");
const inputGramos=document.getElementById("gramos");
const inputComposicion=document.getElementById("composicion");
const inputCuenta=document.getElementById("numeroCuenta");

/* errores y acierto */
const errorFecha=document.getElementById("errorFecha");
const errorCocinero=document.getElementById("errorCocinero");
const errorDestinatario=document.getElementById("errorDestinatario");
const errorGramos=document.getElementById("errorGramos");
const errorComposicion=document.getElementById("errorComposicion");
const errorCuenta=document.getElementById("errorCuenta");
const aciertoCuenta=document.getElementById("aciertoCuenta");

/* en cada una de las funciones comprobaremos si el input correspontiente es valido */
/* y mediante ello devloveremso una x o un tick de verificado */
/* funcion para validar fecha */
let validarFecha=(input,errorFecha)=>{
   
    if(!input.checkValidity()){

       errorFecha.innerHTML="❌";

    }
    else{
        errorFecha.innerHTML="✅";
    }


}
/* funcion validar cocinero */
let validarCocinero=(inputCocinero,errorCocinero)=>{

    if(!inputCocinero.checkValidity()){

        errorCocinero.innerHTML="❌";

    }
    else{
        errorCocinero.innerHTML="✅";
    }

}
/* funcion validar destinatario */
let validarDestinatario=(inputDestinatario,errorDestinatario)=>{

    if(!inputDestinatario.checkValidity()){

        errorDestinatario.innerHTML="❌";

    }
    else{
        errorDestinatario.innerHTML="✅";
    }

}
/* funcion validar gramos */
let validarGramos=(inputGramos,errorGramos)=>{

    if(!inputGramos.checkValidity()){

        errorGramos.innerHTML="❌";

    }
    else{
        errorGramos.innerHTML="✅";
    }

}
/* funcion validar composicion */
let validarComposicion=(inputComposicion,errorComposicion)=>{
    if(!inputComposicion.checkValidity()){

        errorComposicion.innerHTML="❌";

    }
    else{
        errorComposicion.innerHTML="✅";
    }

}
/* funcion validar cuenta */
let validarCuenta=(inputCuenta,errorCuenta)=>{
/* nos ayudaremos de un booleano para devolver o no la respuesta final*/
let estado = true;

/* primero de todo comprobamos que es valido */
    if(!inputCuenta.checkValidity()){
        /* en este caso si no es valido quitamos la respuesta acirto */
        /* por si se quiere validar por segunda vez y devolvemos x */

      aciertoCuenta.innerHTML="";
      return errorCuenta.innerHTML="❌";

    }
    
    /* comprobamos si el inpit inclucye (ll) y manejamos error */
    if(inputCuenta.value.toLowerCase().includes("ll")){

       aciertoCuenta.innerHTML="";
       return errorCuenta.innerHTML="❌";

    }
    
/* realizamos suma de digitos sumando por posicion */
    let sumaDigitos=Number(inputCuenta.value[18])+Number(inputCuenta.value[19]);
    /* suma de los primeros y extraemos entero */
    let sumaPrimeros=Math.floor((Number(inputCuenta.value[5])+Number(inputCuenta.value[6])+Number(inputCuenta.value[7])+Number(inputCuenta.value[8])+Number(inputCuenta.value[9])+Number(inputCuenta.value[10]))/6);

    let sumaDigitos2=Number(inputCuenta.value[20])+Number(inputCuenta.value[21]);
    let sumaSegundos=Math.floor((Number(inputCuenta.value[11])+Number(inputCuenta.value[12])+Number(inputCuenta.value[13])+Number(inputCuenta.value[14])+Number(inputCuenta.value[15])+Number(inputCuenta.value[16]))/6);

    /* comparamos ambos casos si se cumplen el estado pasara a false */
    if(sumaDigitos2!=sumaSegundos&&sumaDigitos!=sumaPrimeros){

        estado=false;

    }
/* y si el estado es falfo devolveremos x */
    if(!estado){

        errorCuenta.innerHTML="❌";
        aciertoCuenta.innerHTML="";
         
    }
    /* si no devolveremos cadena sin guion */
    else{
        errorCuenta.innerHTML="";
        let cadena=inputCuenta.value.split("-");
        aciertoCuenta.innerHTML=cadena[0]+cadena[1]+cadena[2];
    }
    

}

/* funcion addEventListener donde llamamos a las funciones al clicar */

boton.addEventListener("click",(event)=>{
   
    event.preventDefault();
    validarFecha(input,errorFecha);
    validarCocinero(inputCocinero,errorCocinero);
    validarDestinatario(inputDestinatario,errorDestinatario);
    validarGramos(inputGramos,errorGramos);
    validarComposicion(inputComposicion,errorComposicion);
    validarCuenta(inputCuenta,errorCuenta);

})


