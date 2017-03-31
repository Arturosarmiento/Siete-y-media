var puntos = 0;
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
	$('#btnplantar').click(function(){
		$('#btnpedir').prop('disabled', true);
	});
	$('#btninicio').click(function(){
		location.reload();
	});
	$('#btnpedir').click(function(){
		var numero = Math.floor(Math.random()*40 + 0);
		while (baraja[numero].estado == true){
			numero = Math.floor(Math.random()*40 + 0);
		}
		$('#carta').html('<img src=img/' + baraja[numero].nombre + '>');
		$('#cartasjugador').append('<img src=img/' + baraja[numero].nombre + '>');
		puntos += baraja[numero].valor;
		$('#cuentajugador').text('Tus puntos son: ' + puntos.toLocaleString());
		if (puntos >= 7.5){
			$('#btnpedir').prop('disabled', true);
			$('#btnplantar').prop('disabled', true);
		};
	});
})