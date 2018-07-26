function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9.");

		while (numero<0||numero>9)
	{
		numero = prompt("Ingrese un número entre 0 y 9.");

	}

		document.getElementById('numero').value=numero;

}//FIN DE LA FUNCIÓN