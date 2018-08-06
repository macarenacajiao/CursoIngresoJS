function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;



	while(contador<5){
		contador++;
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}

	var promedio = acumulador / contador;
	promedio = parseInt(promedio);



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN