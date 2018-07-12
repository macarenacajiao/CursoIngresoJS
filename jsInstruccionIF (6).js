function mostrar()
{  
	var edad;
	edad=document.getElementById('edad').value;
	
	if (edad<13)
	{
		alert ("Usted es un niño.");
	}
	else 
	{
		if (edad>17)
		{
			alert ("Usted es mayor de edad.");
		}
		else
		{
			alert ("Usted es adolescente.")
		}
	}

}//FIN DE LA FUNCIÓN
//la forma larga de hacer este ejercicio es con 3 'if' pero se puede acortar con el uso del 'else'