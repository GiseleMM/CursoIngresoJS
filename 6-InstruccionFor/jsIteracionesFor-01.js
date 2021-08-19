/*Enunciado:
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
Mostrar con Document.write*/
var contador;
function mostrar()
{
	for(contador=1; contador<11; contador++) //(contador=1; contador<10; contador++)NO va desde el 0 al 9
	{
		document.write(contador+"<br>");
	}
	alert("ok");
}