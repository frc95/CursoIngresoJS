function Mostrar()
{

    var sexo; 
    sexo=prompt("ingrese f ó m .");
    while(sexo!="f" && sexo!="m" && sexo!=null)
    {
        sexo=prompt("Ingrese de nuevo el dato");
    }
       
    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN