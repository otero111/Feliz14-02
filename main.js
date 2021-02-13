i = 0;

	
		
var textos = ["He venido a agradecerte",
"Por estar siempre a mi lado",
"En las buenas y en las malas",
"Porque el tiempo me ha enseñado",
"Que la vida se basa en eso",
"En cosas buenas y malas",
"Pero el momento se hace bueno",
"En mano de la persona correcta",
"De la sonrisa perfecta",
"Por eso te felicito hoy",
"Amor, amigo, hermano",
"Que mas da lo que seas",
"Si la ocasion la merece",
"Como hoy es la ocasion",
"Te dire que te quiero", 
"Que no te vallas por favor",
"Si acaso te tengo lejos",
"Y extrañarnos causa dolor",
"Nunca dudes que te quiero",
"Que cada dia anhelo",
"El regalarte una flor",
"Ahora que el dia se hace bueno",
"Empezare a festejar",
"Por esos dias grandiosos",
"Donde no falto tu lugar",
"Me despido hoy deseandote",
"FELIZ DIA DEL AMOR Y AMISTAD"

]

var publicidad = [
  '<a href="https://rebrand.ly/HostalFarallon"><img src="Portada.jpg" alt=""><h4>Visitar Hostal Farallon</h4></a>',
  '<a href="https://rebrand.ly/donaelis"><img src="doñaelis.jpg" alt=""><h4>Visitar Dulceria Doña Elis</h4></a>',


]




function aleatorio() {
    if(i <= textos.length - 1){
  document.getElementById("resultado").innerHTML = "";
  
        
     document.getElementById("resultado").innerHTML = textos[i];
     i++
    }else{
        document.getElementById("resultado").innerHTML = "Fin";
    }
  }
  setInterval("aleatorio()", 6000)

p = 0;

function a() {
  document.getElementById("publicidad").innerHTML = "";
  document.getElementById("publicidad").innerHTML = publicidad[p];
  p++;
  if (p > publicidad.length - 1){
    p = 0;
  }
  
}

setInterval("a()", 20000)
