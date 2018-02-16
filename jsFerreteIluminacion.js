/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lamparitas;
     var descuento;
     var marcas;
     var importefinal;
     lamparitas=document.getElementById("Cantidad").value;
     marcas=document.getElementById("Marca").value;
     if(lamparitas>=6)
     {
        descuento=(35*lamparitas)*0.5;
     }
     else if(lamparitas==5)
     {
         switch(marcas)
         {
             case "ArgentinaLuz":
                descuento=(35*lamparitas)*0.6;
                break;
             default:
                descuento=(35*lamparitas)*0.7;
                break;   
         }
    }
     else if(lamparitas==4)
     {
         switch(marcas)
         {
             case "ArgentinaLuz":
             case "FelipeLamparas":
                descuento=(35*lamparitas)*0.75;
                break;
             default:
                descuento=(35*lamparitas)*0.8;
                break;   
         }
     }
     else if(lamparitas==3)
     {
         switch(marcas)
         {
             case "ArgentinaLuz":
                descuento=(35*lamparitas)*0.85;
                break;
             case "FelipeLamparas":
                descuento=(35*lamparitas)*0.9;
                break;
             default:
                descuento=(35*lamparitas)*0.95;
                break;      
         }
     }
     else
     {
         descuento=35*lamparitas;
     }
     if(descuento>=120)
     {
         importefinal=descuento*1.1;
         alert("IIBB Usted pago "+importefinal);
     }
     document.getElementById("precioDescuento").value=descuento;
     
     

}
