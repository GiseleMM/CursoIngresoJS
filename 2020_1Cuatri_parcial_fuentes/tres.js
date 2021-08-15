/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	var nombre;
	var edad;
	var genero;
	var estadoCivil;
	var temperaturaCorporal;
	var seguir;
	var maximaTemperatura;
	var banderaMaximaTemperatura;
	var nombreMaximaTemperatura;
	var contadorMayoresDeEdadViudos;
	var contadorHombresSolteros;
	var acumuladorEdadHombresSolteros;
	var promedioEdadHombresSolteros;
	var contadorTerceraEdadConMasDe38;
	var sumaCantidadViudosSolteros;

	contadorTerceraEdadConMasDe38=0;
	acumuladorEdadHombresSolteros=0;
	contadorHombresSolteros=0;
	promedioEdadHombresSolteros=0;
	contadorMayoresDeEdadViudos=0;
	contadorViudosHombres=0;

	seguir="si";
	banderaMaximaTemperatura="si";

	while(seguir=="si")
	{
		nombre=prompt("ingrese nombre");
		edad= prompt("ingrese edad");
		edad=parseInt(edad);
		genero=prompt("ingrese sexo f o m");
		while(genero!="f" && genero!="m")
		{
			genero=prompt("ingrese sexo f o m");
		}
		estadoCivil=prompt("ingrese estado civil 'soltero', 'casado' o 'viudo'");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("ingrese estado civil 'soltero', 'casado' o 'viudo'");
		}
		temperaturaCorporal=prompt("ingrese temperatura corporal");
		temperaturaCorporal=parseInt(temperaturaCorporal);
//A
		if(temperaturaCorporal>maximaTemperatura || banderaMaximaTemperatura=="si")
		{
			maximaTemperatura=temperaturaCorporal;
			nombreMaximaTemperatura=nombre;
			banderaMaximaTemperatura="no";
		}
		switch(estadoCivil)
		{
			case "soltero":
			if(genero=="m")
			{
				contadorHombresSolteros++;
				acumuladorEdadHombresSolteros+=edad;
			}
			break;
			case "viudo":
			if(edad>17)
			{
				contadorMayoresDeEdadViudos++
			}
			if(genero=="m")
			{
				contadorViudosHombres++;
			}
			break;
		}
		if(edad>60 && temperaturaCorporal>38)
		{
			contadorTerceraEdadConMasDe38++;
		}
		seguir=prompt("desea continuar?si/no");
	}//FIN DE WHILE
	sumaCantidadViudosSolteros= contadorHombresSolteros + contadorViudosHombres;
	alert(" la cantidad de hombres viudos y solteros es "+sumaCantidadViudosSolteros);
	if(contadorHombresSolteros>0)
	{
		promedioEdadHombresSolteros= acumuladorEdadHombresSolteros/contadorHombresSolteros;
		alert("el promedio de Edad de los hombres solteros es "+promedioEdadHombresSolteros);
	} 
	else
	{
		alert("no hay hombres solteros");
	}
	alert("la cantidad de personas de 3 edad con mas de 38° es "+contadorTerceraEdadConMasDe38);
	alert("los mayores de edad viudos son "+contadorMayoresDeEdadViudos);
	alert(" el nombre dela persona con las temp es "+nombreMaximaTemperatura);

}//FIN DE LA FUNCTION















































/*function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var posicionMaximaTemperatura;
	var posicionNombre;
	var seguir;
	var cantidadViudosMayoresDeEdad;
	var cantidadDeViudosHombres;
	var cantidadDeHombresSolteros;
	var banderaDetemperaturaCorporal;
	var hombresSolteroEdad;
	var cantidadTerceraEdadConMasDe38;
	var promedioDeEdadHombresSolteros;
	var maximaTemperatura;

	banderaDetemperaturaCorporal="si";
	posicionMaximaTemperatura=0;
	hombresSolteroEdad=0;
	posicionNombre=0;
	cantidadDeHombresSolteros=0;
	cantidadTerceraEdadConMasDe38=0;
	cantidadDeViudosMayoresDeEdad=0;
	cantidadDeViudosHombres=0;
	seguir="si";
	while(seguir=="si")
	{
		nombre= prompt("ingrese nombre ");
		posicionNombre+=1;
		edad= prompt("ingrese Edad "); 
		edad= parseInt(edad);
		sexo= prompt("ingrese sexo 'f' o 'm': " );
		while(sexo!="f" && sexo!="m")
		{
			sexo= prompt("Ingrese sexo 'f' o 'm': ");
		}
		estadoCivil= prompt("ingrese estado civil: ");
		while(estadoCivil!="soltero" && estadoCivil!="casado"&& estadoCivil!="viudo")
		{
			estadoCivil= prompt("ingrese estado civil: ");
		}
		temperaturaCorporal= prompt ("ingrese temperatura corporal:");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		if(temperaturaCorporal>maximaTemperatura || banderaDetemperaturaCorporal=="si")
		{
			maximaTemperatura=temperaturaCorporal;
			posicionMaximaTemperatura+=1;
			banderaDetemperaturaCorporal="no";
		}
		if(posicionMaximaTemperatura==posicionNombre)
		{
			nombreConMasTemperatura= nombre;
		}
		if(temperaturaCorporal>38 && edad>60)
		{
			cantidadTerceraEdadConMasDe38++;
		}
		switch(estadoCivil)
		{
			case "viudo":
			if(edad>17)
			{
				cantidadDeViudosMayoresDeEdad++;
			}
			if(sexo=="m")
			{
				cantidadDeViudosHombres++
			}
			break;
			case "soltero":
			if(sexo=="m")
			{
				cantidadDeHombresSolteros++;
				hombresSolteroEdad+=edad;
			}
			break;
		}

		seguir= prompt("desea continuar?")
	}
	cantidadDeHombresSolterosOViudos= cantidadDeHombresSolteros + cantidadDeViudosHombres;
	alert("la cantidad de hombres solteros o viudos es "+cantidadDeHombresSolterosOViudos);
	alert(" El nombre con mas temperatura es: "+nombreConMasTemperatura);
	alert("la cantidad de persona mayores de 60 con mas de 38 de temperatura es "+cantidadTerceraEdadConMasDe38);
	switch(cantidadDeHombresSolteros)
	{
		case 0:
		alert("no hay ingresados hombres soltero");
		break;
		default:
		promedioDeEdadHombresSolteros= hombresSolteroEdad/cantidadDeHombresSolteros;
		alert("el promedio de edad de hombres solteros es: " +promedioDeEdadHombresSolteros);
		break;

	}

}
*/