function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9");

	while(numero>9 || numero<0){
		alert("Capo, metiste cualquier cosa. PELOTUDO");
		numero = prompt("Ingresa un numero que me sirva.");
	}
	document.getElementById("Numero").value=numero;





}//FIN DE LA FUNCIÓN