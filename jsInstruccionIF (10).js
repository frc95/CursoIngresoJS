function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	nota=parseInt((Math.random())*(11-1)+1);
	alert(nota);
	if(nota>=9)
	{
		alert("EXCELENTE");
	}
	else if(nota>=6)
	{
		alert("muy bien");	
	}
	else if(nota>=4)
	{
		alert("bien");
	}
	else if(nota>=2)
	{
		alert("mal");
	}
	else
	{
		alert("muy mal");
	}

}//FIN DE LA FUNCIÓN