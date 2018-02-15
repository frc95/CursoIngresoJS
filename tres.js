function Mostrar()
{
    var largo
    var ancho
    var per
    var tot

    largo=document.getElementById("alrgo").value;
    ancho=document.getElementById("ancho").value;
    
    per=(largo*2)+(ancho*2);
    tot=per*3;

    alert(tot);
}
