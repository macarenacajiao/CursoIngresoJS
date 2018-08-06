function mostrar()
{

	var contador=0;
	var positivo=0;
	positivo = parseInt(positivo);
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta=="si"){
		contador++;
		numero = prompt("Ingrese un numero");
		if(numero>0){
			positivo = positivo + numero;
		}
		else{
			negativo = negativo * numero;
		}
		respuesta = prompt("Desea continuar? si/no");

	}

alert("Fueron " + contador + " vueltas.");
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN