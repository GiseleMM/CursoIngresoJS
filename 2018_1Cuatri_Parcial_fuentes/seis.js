/*Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
*/

function mostrar()
{
	var hora;
	hora= laHora.value;
	hora= parseInt(hora);

	/*while(i==0 && isNaN(hora)|| hora<1 || hora>24)//Esto me da Bucle infinito, tengo q midificar hora para que no se tilde.
	{
		alert("hora no valida");
		///i++;ESTO tampoco funciona por q entra igual// asignadole a otra variable el campo de texto tampoco funciono
	}*/
	while(isNaN(hora)|| hora <1 || hora>24)
	{
		laHora.value="hora no valida";
		break;//PARA QUE NO VUELVA A ENTRAR AL BUCLE BREAK; 
	}
	switch(hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		alert("es de mañana");
		break;
		case 12:
		case 13:
		case 14: 
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		alert("es de tarde");
		break;
		case 20:
		case 21:
		case 22: 
		case 23:
		case 24:
		alert("es de noche a dormir");
		break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		alert("es de noche");
		break;
	}

}
