/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato

	dato=prompt("Ingrese un dato");
	document.getElementById("elNombre").value=dato;

}

