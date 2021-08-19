/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde
 el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	var numero;
	var par;
	var contadorPares;
	var acumuladorPares;
	acumuladorPares="";
	contadorPares=0;
	seguir=true;
	for(;seguir==true;)//Podria hacerlo con break en seguir y for vacio
	{
		numero=prompt("ingrese N°");
		numero=parseInt(numero);
		acumuladorPares="";//SI NO PONGO ESTO ME CUENTA LOS PARES DE LOS ANTERIORES NUMEROS
		for(i=1;i<=numero;i++)//en este caso inicializo en 1 por que 0/2 da 0 y lo toma como par 
		{
			if(i%2==0)
			{
				acumuladorPares+=" "+i+" ";//SI PONGO "" Me lo conacatena todo pegado;

			}
		}
		alert(acumuladorPares);
		seguir=confirm("desea seguir?");
		if(numero%2==0)
		{
			contadorPares++;

		}
		/*for(i=1;i<=numero;i++)//SI LO COLOCO ACA me pregunta si deseo continuar y luego me da el listado de alert de pares y luego pide el otro n
		{
			if(i%2==0)
			{
				alert(i+" es par "+numero);
			}
		}*/
	}
	alert("la cantidad de pares ingresados es "+contadorPares);
	alert("ok");



}//FIN DE LA FUNCIÓN