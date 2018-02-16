function Mostrar()
{
    //tomo la edad  
    var mesDelAño; 
    mesDelAño=document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Febrero":
            alert("28");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("30");
            break;
        default:
            alert("31")
            break;    



    }

    //alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN