#include <stdio.h>
#include <stdlib.h>
/*se ingresan numeros (distintos de cero), no se sabe cuantos.
se pide mostrar:
    * Cantidad de pares e impares.
    * Porcentaje de numeros positivos y negativos.
    * Maximo y minimo.
    * maximo numero par.
    * Cantidad de numeros comprendidos entre 125 y 236.*/
int main()
{
    int numero;
    char respuesta='s';
    int cantidadPares=0;
    int cantidadImpares=0;
    int cantidadPositivo=0;
    int cantidadNegativo=0;
    int cantidadGeneral=0;
    float porcentajeNegativo;
    float porcentajePositivo;
    int bandera=0;
    int flagpar=0;
    int maximo;
    int minimo;
    int maximoPar;
    int cantidadComprendidos=0;
    do
    {
      printf("Ingrese un numero: ");
      scanf("%d",&numero);
      while(numero==0)
      {
          printf(" \n reingrese el numero: ");
          scanf("%d",&numero);
      }
      if(numero%2==0 && numero!=0)
      {
           /*if(contadorpares==0 || numero>maximopar)
                {
                    maximoPar=numero;
                }
                */
            cantidadPares++;
            if(flagpar==0 || numero>maximoPar)
            {
                flagpar=1;
                maximoPar=numero;
            }
      }
      else
      {

            cantidadImpares++;

      }
      if(numero>0)
      {
            cantidadPositivo++;
      }
      else
      {
            cantidadNegativo++;
      }
      if(bandera==0)
      {
           bandera=1;
           maximo=numero;
           minimo=numero;
           maximoPar=numero;
      }
      else
      {
           if(numero>maximo)
           {
               maximo=numero;
           }
           if(numero<minimo)
           {
               minimo=numero;
           }
       }
       if(numero>125 && numero<236)
       {
           cantidadComprendidos++;
       }

       printf("Desea continuar? \n");
       respuesta=getche();
    }
    while(respuesta!='n');
    cantidadGeneral=cantidadNegativo+cantidadPositivo;
    porcentajePositivo=(float)(cantidadPositivo*100)/cantidadGeneral;
    porcentajeNegativo=100-porcentajePositivo;
    printf("\nLa cantidad de numeros pares es: %d \n",cantidadPares);
    printf("La cantidad de numeros impares es: %d \n",cantidadImpares);
    printf("La cantidad de numeros negativos en porcentaje es: %% %f \n",porcentajeNegativo);
    printf("La cantidad de numeros positivos en porcentaje es: %% %f \n",porcentajePositivo);
    printf("El numero maximo es: %d \n",maximo);
    printf("El numero minimo es: %d \n",minimo);
    printf("El numero maximo par es: %d \n",maximoPar);
    printf("La cantidad de numeros comprendidos entre 125 y 236 es: %d\n",cantidadComprendidos);
    return 0;
}
