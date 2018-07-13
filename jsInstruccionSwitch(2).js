function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
		alert ("Falta para el Invierno");
		break;
	case "Diciembre":
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
		alert ("Ya pasamos el frío, ahora calor!");
		break;
	case "Julio":
	case "Agosto":
		alert ("Abrigate que hace frío.");
		break;

}



}//FIN DE LA FUNCIÓN