function mostrar()
/*
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.*/
{
	var nota;
	var sexo;
	var edad;
	var acumuladorNota=0;
	var varonesMayor18=0;
	var minimo;
	var maximo;
	var sexoMasJoven;
	var notaMasJoven;
	var edadMasJoven;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var notaPrimerMujer;
	var edadPrimerMujer;
	var contador=0;
	var primerMujer=0;

	while (contador<5)
	{
		nota=prompt ("Ingrese nota");
		nota=parseInt (nota);
		while (nota<0 || nota>10)
		{
			nota=prompt ("Error, ingrese un valor entre 0 y 10.");
			nota=parseInt (nota);
		}

		acumuladorNota=acumuladorNota+nota;
		
		edad=prompt ("Ingrese su edad.");
		edad=parseInt (edad);
		
		sexo=prompt ("Ingrese el sexo (f o m).");
		while (sexo!= "f" && sexo!="m")
		{
			sexo=prompt ("Error, ingrese f o m.");
		}

		if (sexo=="f" && primerMujer==0)
		{
			primerMujer=1;
			edadPrimerMujer=edad;
			notaPrimerMujer=nota;
		}
		if (contador==0)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
			sexoMasJoven=sexo;
			notaMasJoven=nota;
			edadMasJoven=edad;
		}
		else 
		{
			if (nota<notaMasBaja)
			{
				sexoNotaMasBaja=sexo;
				notaMasBaja=nota;
			}
		}
		if (sexo=="m" && edad>18 && nota>=6)
		{
			varonesMayor18++;
		}
		if (edad<edadMasJoven)
		{
			notaMasJoven=nota;
			sexoMasJoven=sexo;
			edadMasJoven=edad;
		}
		contador++;
	
	}
		alert ("El promedio de las notas totales es "+acumuladorNota/5+".");
		alert ("La nota mas baja es "+notaMasBaja+" y el sexo de esa persona es "+sexo+".");
		alert ("La cantidad de varones mayores a 18 es "+varonesMayor18+" y sus notas han sido mayores o iguales a 6.");
		alert ("El sexo del mas joven es "+sexoMasJoven+" y la nota es "+notaMasJoven+".");
		if (primerMujer==1) 
		{
			alert ("La nota de la primer mujer ingresada es "+notaPrimerMujer+".");
		}	
		else 
		{
			alert ("No se ha ingresado ninguna mujer");
		}
}
