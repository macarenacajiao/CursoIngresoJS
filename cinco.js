function mostrar()
{
	var planeta;

	planeta=prompt("Ingresar planeta.");
	planeta=planeta.toLowerCase();
	
		switch (planeta)
	{
		case "tierra":
		alert ("Acá vivimos.")
		break;
		case "mercurio":
		case "venus":
		alert ("Acá hace más calor");
		break;
		case "jupiter":
		case "marte":
		case "urano":
		case "neptuno":
		case "pluton":
		alert ("Acá hace más frío");
		break;
		default:
		alert ("No ingresaste un planeta");
		break;
		}

}
