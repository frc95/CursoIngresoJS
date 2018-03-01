function Mostrar()
{

    var num;
    var i;
    var cantidadpares=0;
    num=prompt("Ingrese un numero");
    for(i=1;i<num;i++)
    {

        if(num%2==0)
        {
            cantidadpares++;
            alert("Los pares son " +cantidadpares);
        }
    }
    

}//FIN DE LA FUNCIÓN