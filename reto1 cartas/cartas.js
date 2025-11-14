  /* creamos una lista que contendra los elementos con la clase cartas */
  const cartas=document.querySelectorAll('.carta');
  /* la primera y segunda carta se muestran como nulas es decir sin ser todavia descubiertas */
  let primeraCarta=null;
  let segundaCarta=null;
  /* contadores a 0 */
  let contador=0;
  let contador2=0;
  let contador3=0;
/* hacemos una arrow function con evento */
  const descubrirCarta=(event)=>{
    /* guardamos en carta la carta que hemos seleccionado */
    const carta=event.target; 
    /*y visualizamos la foto correspondiente que sera el dataset animal que le hemos personalizado */
    carta.src=carta.dataset.animal +'.webp';
/* hacemos las compraciones de cartas */
/* si no es nula alberga la carta si no la segunda carta albertgara la segunda seleccionada */
    if(!primeraCarta) {
      primeraCarta = carta;
      primeraCarta.removeEventListener("click",descubrirCarta)

    }else{
      segundaCarta = carta;
      segundaCarta.removeEventListener("click",descubrirCarta)
      contador++;
      document.getElementById('contador').innerHTML=contador;
/* si la primera carta es igual que la segunda el contador de aciertos incrementara*/
      if(primeraCarta.dataset.animal==segundaCarta.dataset.animal){
        contador2++;
        document.getElementById("contador2").innerHTML=contador2;
        /* hacemos un remove para evitar clicks molestos */
        primeraCarta.removeEventListener('click',descubrirCarta);
        segundaCarta.removeEventListener('click',descubrirCarta);
/* añadimos una clase para la primera y segunda carta que deremos estilos en el css */
           primeraCarta.classList.add('acertada');
           segundaCarta.classList.add('acertada');
/* reseteamos cartas */
        primeraCarta=null;
        segundaCarta=null;
      }else{
        /* si no el contador de fallos incrementara */
        contador3++;

        document.getElementById("contador3").innerHTML=contador3;
        /* y aqui hacemos un remove de todas las cartas para evitar una tercera o cuarta carta */
        cartas.forEach(c=>c.removeEventListener("click",descubrirCarta))
/* hacemos un settimeout para regresar a la normalidad a los 2 segundos */
        setTimeout(()=>{
            /* volvemos a dar opcion de click a las cartas */
          cartas.forEach(c=>c.addEventListener("click",descubrirCarta))
          /* y la primera y segunda volveran a la imagen del boton */
          primeraCarta.src='botonrojo.webp';
          segundaCarta.src='botonrojo.webp';
          /* vuelta a resetear */
          primeraCarta=null;
          segundaCarta=null;

        },2000);
      }
    }
  };

/* hacemos un forEach de cartas para que addEventListener funcione independientemente de la carta que sea con la funcio */
/* arrow function que se activara al hhacer click en cualquier carat */
  cartas.forEach(carta=>carta.addEventListener('click', descubrirCarta));

