function Mostrar()
{
    //ingresar 3 numeros y decir cual es el mayor
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var numeroMayor=0;
    numeroUno=prompt("Ingrese el primer numero");
    numeroDos=prompt("Ingrese el segundo numero");
    numeroTres=prompt("Ingrese el tercer numero");
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    numeroTres=parseInt(numeroTres);
    
    if(numeroUno>numeroMayor && numeroDos<numeroUno)
    {
        numeroMayor=numeroUno;
    }
    else
    {
        if(numeroDos>numeroMayor && numeroDos>numeroTres)
        {
            numeroMayor=numeroDos;
        }
        else
        {
            numeroMayor=numeroTres;
        }
    }    
    alert("El numero mayor es "+numeroMayor);
}
