function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	if (edad>17)
	{
		alert ("Usted es mayor de edad");
	}
	else
	{
		alert ("Usted es menor de edad");
	}
}//FIN DE LA FUNCIÓN
//el if que es falso lo cambiamos por un else (if (edad<18))