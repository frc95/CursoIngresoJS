function Mostrar()
{
    var importe;
    var descuento;
    var descuento2;
    var importetotal;
    var descuento3;
    descuento=prompt("Ingrese el descuento");
    importe=prompt("Ingrese el importe");
    importe=parseInt(importe);
    descuento=parseInt(descuento);
    descuento2=descuento/100;
    descuento3=importe*descuento2;
    importetotal=importe-descuento3;
    document.getElementById("importeFinal").value=importetotal;
}
