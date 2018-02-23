function Mostrar()
{

	var contador=0;
	var numero;
	var negativo=0;
	var positivo=0;
	var cantidadpositivos=0;
	var cantidadnegativos=0;
	var cantidaddeceros=0;
	var contadorpares=0;
	var promediopositivos;
	var promedionegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese el numero");
		numero=parseInt(numero);
		if(numero%2==0 && numero!=0)
		{
			contadorpares++;
		}//(numero%2==0)
		if(numero<0)
		{
			negativo=negativo+numero;
			cantidadnegativos=cantidadnegativos+1;
		}
		else if(numero>0)
		{
			positivo=positivo+numero;
			cantidadpositivos=cantidadpositivos+1;
		}
		else
		{
			cantidaddeceros=cantidaddeceros+1;
		}

		respuesta=prompt("quiere seguir");
	}//while(respuesta!="no")
	promedionegativos=negativo/cantidadnegativos;
	promediopositivos=positivo/cantidadpositivos;
	diferencia=positivo-negativo;
	document.write("La suma de los negativos son: " +negativo);
	document.write(" La suma de los positivos son: " +positivo);
	document.write(" La cantidad de positivos es: " +cantidadpositivos);
	document.write(" La cantidad de negativos es: " +cantidadnegativos);
	document.write(" La cantidad de ceros es: " +cantidaddeceros);
	document.write(" La cantidad de numeros pares es: " +contadorpares);
	document.write(" El promedio de positivos es: " +promediopositivos);
	document.write(" El promedio de negativos es: " +promedionegativos);
	document.write(" La diferencia de entre positivos y negativos es: " +diferencia);



}//FIN DE LA FUNCIÓN