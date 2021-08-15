/*Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.*/
function mostrar()
{
	var numero1;
	var numero2;
	var cuadradoDelNumero;
	var restoDeNumero1DividoNumero2;
	var restaNumero1Numero2;

	numero1= prompt("ingrese un número");
	numero1=parseInt(numero1);
	numero2= prompt("ingrese un número");
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		cuadradoDelNumero= numero1*numero2;
		alert("el cuadrado del numero ingresado es "+cuadradoDelNumero)
	}
	else
	{
		if(numero1%numero2==0)
		{
			restaNumero1Numero2= numero1- numero2;
			alert("La resta de num 1 y num 2 es "+restaNumero1Numero2);
		}
		else
		{
			restoDeNumero1DividoNumero2= numero1 % numero2;
			alert(" el resto de la division entre num1 y num2 es "+restoDeNumero1DividoNumero2)
			if(restoDeNumero1DividoNumero2>3)
			{
				alert("el resto de la division es mayor a 3");
			}
		}
	}


}
