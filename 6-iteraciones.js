//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador=0;
	var maximo;
	var maximodias=1;
	var minimodias=1;
	var minimo;
	var bandera=true;
	while(contador<7)
	{
		contador++;
		importe=prompt("ingrese el importe del dia " +contador)
		importe=parseInt(importe);
		while(importe<0)
		{
			importe=prompt("Error reingrese el importe del dia " +contador);
			importe=parseInt(importe);
			console.log(importe);
		}
		
		console.log(importe);
		if(bandera)
		{
			bandera=false;
			maximo=importe;
			maximodias=contador;
			minimo=importe;
			minimodias=contador;
		}
		else
		{
			if(importe>maximo)
			{
				maximo=importe;
				maximodias=contador;
			}
			if(importe<minimo)
			{
				minimo=importe;
				minimodias=contador;
			}
		}
	}
	alert("El importe mayor es " +maximo +" del dia " +maximodias);
	alert("El importe menor es " +minimo +" del dia " +minimodias);
}

