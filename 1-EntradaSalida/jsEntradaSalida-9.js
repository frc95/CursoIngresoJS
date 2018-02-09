/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

    var sueldo;
    var resultado;

    sueldo=document.getElementById("sueldo").value;
    sueldo=parseInt(sueldo);

    resultado=sueldo*1.10;

    document.getElementById("resultado").value=resultado;
}
