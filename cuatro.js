function mostrar()
{
	var numeroUno;
	var numeroDos;
	var concatenar;
	var suma;
	var resta;
	
	numeroUno=prompt("Ingrese el primer número");
	numeroDos=prompt("Ingrese el segundo número");

	concatenar=numeroUno+numeroDos;
	suma=parseInt(numeroUno)+parseInt(numeroDos);
	resta=parseInt(numeroUno)-parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		alert (concatenar);
	}

	else  
	{
		if (numeroUno>numeroDos) 
		{
			alert (resta);
		}
		else
		{		
		if (suma>10)
		{
			alert ("La suma es "+suma+" y es mayor que 10.");
		}
		else 
		{
			alert (suma);
		}
	} 
	
	}
}
