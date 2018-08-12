/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.*/


function mostrar()
{
	var animal;
	var peso=0;
	var tempHabitat=0;
	var respuesta="si";
	var tempPares=0;
	var animalMasPesado;
	var pesoAnimalMasPesado;
	var temperaturaAnimalMasPesado;
	var cantAnimalesCeroGrados=0;
	var promedioPeso=0;
	var contador=0;
	var primerAnimal=0; //flag o bandera
	var maximo=0;
	var minimo=0;


	while (respuesta=="si")
	{
		contador++;
		
		animal=prompt ("Ingrese un animal.");
		
		peso=parseInt(prompt("Ingrese el peso del animal."));
		
		while (peso<=1 || peso>=1000)
		{
			peso=parseInt(prompt("Ingrese correctamente el peso del animal (entre 1 y 1000)."));	
		}
		promedioPeso=promedioPeso+peso;


		tempHabitat=parseInt(prompt("Ingrese la temperatura de hábitat."));

		while (tempHabitat<=-30 || tempHabitat>=30)
		{
			tempHabitat=parseInt(prompt("Ingrese la temperatura correcta del hábitat (entro -30 y 30)."));
		}

		if ((tempHabitat%2)==0)
		{
				//par
				tempPares++;
			}
			
			if (primerAnimal==0)
			{
				primerAnimal++;
				animalMasPesado=animal;
				temperaturaAnimalMasPesado=tempHabitat;
				pesoAnimalMasPesado=peso;
			}
			else 
			{
				if (peso>pesoAnimalMasPesado)
				{
					animalMasPesado=animal;
					temperaturaAnimalMasPesado=tempHabitat;
					pesoAnimalMasPesado=peso;
				}
			}
			if (tempHabitat<0)
			{
				cantAnimalesCeroGrados++;

			}



			respuesta=prompt ("Desea continuar?");
			while (respuesta!="no" && respuesta!="si")
			{
				respuesta=prompt ("Ingrese si o no.");
			}
		}

		document.write ("La cantidad de temperaturas pares es "+tempPares+".<br>");
		document.write ("El nombre y temperatura del animal mas pesado es "+animalMasPesado+" "+temperaturaAnimalMasPesado+".<br>");
		document.write ("La cantidad de animales que viven a cero grados es "+cantAnimalesCeroGrados+".<br>");
		document.write ("El promedio y el peso de todos los animales es "+promedioPeso/contador+".<br>");
	}
