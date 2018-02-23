function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(contador==0)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{

			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}	
		respuesta=prompt("para salir, ingresar no");
		contador++;	
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo"),value=minimo;
	



}//FIN DE LA FUNCIÓN