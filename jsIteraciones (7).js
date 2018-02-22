function Mostrar()
{

	var contador=0;
	var numero;
	var acumulador=0;
	var respuesta;
	respuesta=prompt("quiere seguir?");
	while(respuesta=="si")
	{
		contador++;
		numero=prompt("ingrese el numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("ingrese el numero");
			numero=parseInt(numero);
		}
		respuesta=prompt("")
		
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN