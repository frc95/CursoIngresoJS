function Mostrar()
{
    //ingresar un nombre de aninal, tambien el peso del animal >0 , imgresar temperatura del habitat -40 y 40,
    //ingrear el sexo del animal f o m, imformar el nombre del animal mas pesado, el nombre del animal
    //cuyo habitat es el mas frio, la cantidad de temperatura pares e impares, la cantidad de temperaturas
    //positivas y negativas, el sexo del animal cuyo abitad tiene como temperatura cero.
    var nombredeAnimal;
    var pesodeAnimal;
    var temperaturadelHabitat;
    var sexodelAnimal;
    var contador=0;
    var respuesta="si";
    while(respuesta!="no")
    {
        contador++;
        nombredeAnimal=prompt("Ingrese el nombre del animal");
        pesodeAnimal=prompt("Ingrese el peso del animal");
        pesodeAnimal=parseInt(pesodeAnimal);
        while(pesodeAnimal<=0)
        {
            pesodeAnimal=prompt("Error reingrese el peso del animal");
        }
        temperaturadelHabitat=prompt("Ingrese la temperatura del habitat del animal");
        temperaturadelHabitat=parseInt(temperaturadelHabitat)
        while(temperaturadelHabitat<-40 || temperaturadelHabitat>40)
        {
            temperaturadelHabitat=prompt("Error reingrese la temperatura del habitat del animal");
        }
        sexodelAnimal=prompt("Ingrese el sexo");
        while(sexodelAnimal!="masculino" && sexodelAnimal!="fememino")
        respuesta=prompt("quiere seguir?");
        

    }
    

}
