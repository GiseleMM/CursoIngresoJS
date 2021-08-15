/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/
function mostrar()
{
	var numero;
	var numero1;
	var suma;
	var resta;
	var i;
	var mensaje;
	mensaje="";
	i=0;
	while(i<2)
	{
		numero=prompt("ingrese un numero");
		numero= parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("ingrese un numero");
			numero= parseInt(numero);
		}
		
		if(i==0)//PARA PODER COMPARAR UN NUMERO CON EL OTRO TUVE Q GUARDAR EN OTRA VARIABLE LA 1ITERACION
		{
			numero1=numero;
		}
		else
		{

			if(numero1>numero)
			{
				resta=numero1 - numero;
				mensaje="la rsta da "+resta;
			}
			else
			{
				if(numero1==numero)
				{
					mensaje=numero1+""+numero;
				}
				else
				{
					suma= numero1 + numero;
					if(suma>10)
					{
						mensaje="la suma es "+suma+" y supero el 10";
					}
					else
					{
						mensaje="la suma es "+suma+ "y NO supero el 10";
					}
				}
			}
		}


		i++;
	}//FIN DEL WHILE

alert(mensaje);
}
