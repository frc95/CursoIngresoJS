function Mostrar()
{
    //tomo la edad  
    var mesDelAño;
    mesDelAño=document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "junio":
            alert("Falta para el invierno");
            break;
        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio");
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor!!!");
            break;        

    }





}//FIN DE LA FUNCIÓN