/*Gisele Medina Div H
Ejercicio 1 Recu 2018*/
function mostrar()
{
	let anchoRectangulo;
	let largoRectangulo;
	let perimetroRectangulo;

	anchoRectangulo=prompt("Ingrese ancho del rectangulo: ");
	anchoRectangulo=parseFloat(anchoRectangulo);
	largoRectangulo=prompt("Ingrese el largo del rectangulo: ");
	largoRectangulo=parseFloat(largoRectangulo);

	perimetroRectangulo=2*(anchoRectangulo+largoRectangulo);

	alert("El perimetro del rectangulo es: "+perimetroRectangulo);

}

