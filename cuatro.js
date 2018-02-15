function Mostrar()
{
    var num1;
    var num2;
    var tot;

    num1=prompt("Ingrese el primer numero");
    num2=prompt("Ingrese el segundo numero");
    num1=parseInt(num1);
    num2=parseInt(num2);

    if(num1==num2)
    {
        tot=num1*num2;
        document.write(tot);
    }
    else if(num1>num2)
    {
        tot=num1-num2;
        document.write(tot);
    }
    else
    {
        tot=num1+num2;
        document.write(tot);
    }
}    