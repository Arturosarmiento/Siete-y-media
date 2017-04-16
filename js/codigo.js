var puntosJugador = 0;
var puntosMaquina =0;

var baraja = [
 	// palo oros
{nombre:"oros1.jpg" , valor:1,estado:false},
{nombre:"oros2.jpg" , valor:2,estado:false},
{nombre:"oros3.jpg" , valor:3,estado:false},
{nombre:"oros4.jpg" , valor:4,estado:false},
{nombre:"oros5.jpg" , valor:5,estado:false},
{nombre:"oros6.jpg" , valor:6,estado:false},
{nombre:"oros7.jpg" , valor:7,estado:false},
{nombre:"oros10.jpg" , valor:0.5,estado:false},
{nombre:"oros11.jpg" , valor:0.5,estado:false},
{nombre:"oros12.jpg" , valor:0.5,estado:false},
//  palo espadas
{nombre:"espadas1.jpg" , valor:1,estado:false},
{nombre:"espadas2.jpg" , valor:2,estado:false},
{nombre:"espadas3.jpg" , valor:3,estado:false},
{nombre:"espadas4.jpg" , valor:4,estado:false},
{nombre:"espadas5.jpg" , valor:5,estado:false},
{nombre:"espadas6.jpg" , valor:6,estado:false},
{nombre:"espadas7.jpg" , valor:7,estado:false},
{nombre:"espadas10.jpg" , valor:0.5,estado:false},
{nombre:"espadas11.jpg" , valor:0.5,estado:false},
{nombre:"espadas12.jpg" , valor:0.5,estado:false},
// palo copas
{nombre:"copas1.jpg" , valor:1,estado:false},
{nombre:"copas2.jpg" , valor:2,estado:false},
{nombre:"copas3.jpg" , valor:3,estado:false},
{nombre:"copas4.jpg" , valor:4,estado:false},
{nombre:"copas5.jpg" , valor:5,estado:false},
{nombre:"copas6.jpg" , valor:6,estado:false},
{nombre:"copas7.jpg" , valor:7,estado:false},
{nombre:"copas10.jpg" , valor:0.5,estado:false},
{nombre:"copas11.jpg" , valor:0.5,estado:false},
{nombre:"copas12.jpg" , valor:0.5,estado:false},
// palo bastos
{nombre:"bastos1.jpg" , valor:1,estado:false},
{nombre:"bastos2.jpg" , valor:2,estado:false},
{nombre:"bastos3.jpg" , valor:3,estado:false},
{nombre:"bastos4.jpg" , valor:4,estado:false},
{nombre:"bastos5.jpg" , valor:5,estado:false},
{nombre:"bastos6.jpg" , valor:6,estado:false},
{nombre:"bastos7.jpg" , valor:7,estado:false},
{nombre:"bastos10.jpg" , valor:0.5,estado:false},
{nombre:"bastos11.jpg" , valor:0.5,estado:false},
{nombre:"bastos12.jpg" , valor:0.5,estado:false},
];

$(document).ready(function(){
	$('#cuentajugador').html("PUNTOS:<br>" + puntosJugador);
	$('#cuentamaquina').html("PUNTOS:<br>" + puntosMaquina);

	$('#btnplantar').click(function(){
		$('#btnpedir').prop('disabled',true);
		$('#btnplantar').prop('disabled',true);
		if (puntosJugador<=7.5){
			//Llamar a la función para que juegue la máquina
			juegaMaquina();
		}	else{
			//GAME OVER. Ha ganado la máquina
			$('#btnplantar').prop('disabled',true);
			//Mostrar mensaje de quién ha ganado
			gameOver(2);
		}
	});

	$('#btninicio').click(function(){
		location.reload();
	});

	$('#btnpedir').click(function(){
		//Pide carta
		sacaCarta(1);
		$('#cuentajugador').html("PUNTOS:<br>" + puntosJugador);
		if(puntosJugador>7.5){
			gameOver(2);
			$('#btnplantar').prop('disabled',true);
		} else {
			$('#btnplantar').prop('disabled',false);
		}
	});
})


function sacaCarta(quien){
	var numero = Math.floor(Math.random()*40 + 0)
	//Compruebo que la carta no ha salido
	while (baraja[numero].estado){
		numero = Math.floor(Math.random()*40 + 0)
	}
	//1 es el jugador y 2 el ordenador
	if (quien==1){
		$('#carta').html('<img src=img/' + baraja[numero].nombre + '>');
		$('#cartasjugador').append('<img src=img/' + baraja[numero].nombre + '>');
		puntosJugador = puntosJugador + baraja[numero].valor;
	} else if(quien==2){
		$('#cartamaquina').html('<img src=img/' + baraja[numero].nombre + '>');
		$('#cartasmaquina').append('<img src=img/' + baraja[numero].nombre + '>');
		puntosMaquina = puntosMaquina + baraja[numero].valor;
	}
}
//Función que realiza el juego de la máquina
function juegaMaquina(){
	var ganador;
	sacaCarta(2);
	$("#cuentamaquina").html("PUNTOS:<br>" + puntosMaquina);


	while (puntosMaquina<7.5){
		sacaCarta(2);
		$("#cuentamaquina").html("PUNTOS:<br>" + puntosMaquina);
	}

	if (puntosMaquina==7.5){
		ganador=2;
	} else {
		ganador=1;
	}

	gameOver(ganador);
}

function numeroFigurasQueQuedan(){
	var numero=0;
	for (var i=0; i<baraja.length; i++){
		if ((baraja[i].valor==0.5) && (baraja[i].estado==false)){
			numero++;
		}
	}
	return numero;
}

function gameOver(arg){
	var inhtml="";
	if (arg==1){
		//Ha ganado el jugador
		inhtml = "¡GAME OVER!<br><br>¡FELICIDADES! ¡HAS GANADO!";
	} else if (arg==2){
		inhtml = "¡GAME OVER!<br><br>GANA LA MÁQUINA"
	}
	inhtml += "<div id='btncerrar' onclick='location.reload();'>x</div>";
	$("#gameover").html(inhtml);
	$("#gameover").delay(1000).fadeIn("slow");
}