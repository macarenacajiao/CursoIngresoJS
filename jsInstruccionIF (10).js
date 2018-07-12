function mostrar()
{
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;
	if  (nota>=9&&nota>=10)
	{
		alert (nota +"Excelente");
	}
	else
	{
		if (nota>4)
		{
			alert (nota + "Aprobó");
		}
		else 
		{
			alert (nota + "Vamos la próoxima se puede");
		}
	}

	

}//FIN DE LA FUNCIÓN