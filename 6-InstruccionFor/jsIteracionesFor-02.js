/*Enunciado:
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.
Mostrar con Document.write*/
var contador;
function mostrar()
{
	for (contador=10; contador>0; contador--)// ( contador=10; contador>1; contador--)NO FUNCIOna cuando sea mayor a 1 no se incluye 1
		{
		document.write(contador+"<br>");
		}

	alert("ok");
}	
