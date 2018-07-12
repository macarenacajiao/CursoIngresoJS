function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	{

	if (edad>=18||edad<=12)
		{
			alert ("Usted no es adolescente");
		}
	}
}//FIN DE LA FUNCIÓN
//con ! (operador de negaciòn) niego una condiciòn asi no tengo un bloque vacìo
//con || (operador O) no hace falta negar la condición if