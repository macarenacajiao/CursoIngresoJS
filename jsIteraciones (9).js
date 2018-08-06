function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no'){
		contador++;
		numero = prompt ("Ingrese número.");
		if(contador==1){
			maximo=numero;
			minimo=numero;
		}
		else{
			if(numero>maximo){
				maximo=numero;
			}
			else{
					minimo=numero;
				}
			}
		
		respuesta = prompt ("¿Desea continuar?");
	}
	document.getElementById('minimo').value=minimo;
	document.getElementById('maximo').value=maximo;




}//FIN DE LA FUNCIÓN