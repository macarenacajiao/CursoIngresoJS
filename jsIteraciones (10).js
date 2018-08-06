function mostrar()
{

	var contador=0;
	var numero;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadNegativos=0;
	var cantidadPositivos=0;
	var cantidadCeros=0;
	var cantidadNumerosPares=0;
	var resto;
	
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no"){
		contador++;
		numero = prompt ("Ingrese número.");
		respuesta = prompt ("¿Desea continuar?");
		numero = parseInt (numero);
		resto=numero%2;
		if(resto==0){
			cantidadNumerosPares++;
		}
		if(numero>0){
			sumaPositivos=sumaPositivos+numero;
			cantidadPositivos++;
		}
		else{
			if (numero<0){
			sumaNegativos=sumaNegativos+numero;
			cantidadNegativos++;
			}
			else{
				if(numero==0)
					cantidadCeros++;
			}
		}


	}
	var promedioPositivos=parseInt(sumaPositivos)/contador;
	var promedioNegativos=parseInt(sumaNegativos)/contador;
	promedioPositivos=parseInt(promedioPositivos);
	promedioNegativos=parseInt(promedioNegativos);
	var diferencia=parseInt(sumaPositivos)-parseInt(sumaNegativos);

	document.write ("La suma de los positivos es "+sumaPositivos+"<br>"+".");
	document.write ("La suma de los negativos es "+sumaNegativos+"<br>"+".");
	document.write ("La cantidad de positivos es "+cantidadPositivos+"<br>"+".");
	document.write ("La cantidad de negativos es "+cantidadNegativos+"<br>"+".");
	document.write ("La cantidad de ceros es "+cantidadCeros+"<br>"+".");
	document.write ("La cantidad de números pares es "+cantidadNumerosPares+"<br>"+".");
	document.write ("El promedio de los positivos es "+promedioPositivos+"<br>"+".");
	document.write ("El promedio de los negativos es "+promedioNegativos+"<br>"+".");
	document.write ("La diferencia de negativos y positivos es "+diferencia+"<br>"+".");


}//FIN DE LA FUNCIÓN