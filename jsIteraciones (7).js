function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;



	while(respuesta == "si"){
		contador++;
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta = prompt("Desea continuar? si/no")
	}

	var promedio = acumulador / contador;
	promedio = parseInt(promedio);



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN