/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
    var descuento;
    var resultado;

    importe=document.getElementById("importe").value;
    importe=parseInt(importe);
    
    descuento=importe*0.25;
    resultado=importe-descuento;

    document.getElementById("resultado").value=resultado;

}
