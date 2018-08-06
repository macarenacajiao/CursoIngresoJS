function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese precio");
	descuento=prompt("Ingrese descuento");
	precioFinal= precio * descuento /100;	
	document.getElementById('elPrecioFinal').value=precioFinal;
}
