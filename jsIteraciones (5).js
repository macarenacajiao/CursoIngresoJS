function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while(sexo!= "f" && sexo!= "m"){
	alert("Ingrese un sexo válido");
	break;
}
if(sexo=="f"){
	document.getElementById('Sexo').value="El sexo es Femenino";
}
else{
	document.getElementById('Sexo').value="El sexo es masculino";
}


}//FIN DE LA FUNCIÓN