/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de varios libros con cuatro datos por cada libro, nombre, cantidad de páginas, cantidad de ventas (0 o más) y tema (posibles temas: “robótica", "programación", "patrones", "base de datos”) 
validar e ingresar datos hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de libros con páginas pares. 
b) La cantidad de libros con páginas impares. 
c) La cantidad de ceros ventas. 
d) El promedio de todas las ventas ingresadas. 
e) La suma de todas las páginas de los de "programación".*/
function mostrar()
{
	var nombreLibro;
	var contador=0;
	var cantPags;
	var cantVentas;
	var temaLibro;
	var respuesta="si";
	var cantidadImpares=0;
	var cantidadPares=0; 
	var cantidadVentas=0;
	var ventasCero=0;
	var promedioVentas=0;
	var sumaPagsProgramacion=0;


		while (respuesta=="si")
	{
		contador++;

		nombreLibro=prompt("Ingrese nombre del libro.");
		
		cantPags=parseInt(prompt("Ingrese cantidad de paginas."));

		cantVentas=parseInt(prompt("Ingrese cantidad de ventas"));

		//esto acumula la cantidad de ventas totales de todos los libros. esta funcion hace el punto d).	
		cantidadVentas=cantidadVentas+cantVentas;

		temaLibro=parseInt(prompt("Ingrese tema. Tema 1:Robotica, Tema 2:Programación, Tema 3:Base de datos, Tema 4:Patrones"));

		while (temaLibro!=1 && temaLibro!=2 && temaLibro!=3 && temaLibro!=4 )
		{
			temaLibro=parseInt(prompt("Error. Ingrese Tema 1:Robotica, Tema 2:Programación, Tema 3:Base de datos, Tema 4:Patrones"));

		}

		if ((cantPags%2)==0)
		{
			//par
			cantidadPares++;
		}
		else
		{
			//impar
			cantidadImpares++;
		}	
		if (cantVentas==0) 
		{
			ventasCero++;
		}	
		if (temaLibro==2)
		{
			sumaPagsProgramacion++;
		}


		respuesta=prompt ("Desea continuar?");
		while (respuesta!="no" && respuesta!="si")
		{
			respuesta=prompt ("Ingrese si o no.");
		}
	}
	document.write ("La cantidad de libros con paginas pares es "+cantidadPares+".<br>" );
	document.write ("La cantidad de libros con paginas impares es "+cantidadImpares+".<br>");
	document.write ("La cantidad de cero ventas es "+ventasCero+".<br>");
	document.write ("El promedio de todas las ventas ingresadas es "+cantidadVentas/contador+".<br>");
	document.write ("La suma de todas las paginas de programación es "+sumaPagsProgramacion+".<br>");

}
