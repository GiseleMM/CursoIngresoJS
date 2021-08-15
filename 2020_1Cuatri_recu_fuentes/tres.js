/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre,
 nacionalidad , edad, sexo("f" o "m") y estado civil("soltero",
  "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) ,
 tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
	var nombre;
	var edad;
	var genero;
	var estadoCivil;
	var temperatura;
	var seguir;
	var nacionalidad;
	var contadorSolterosMayoresDeEdad;
	var contadorMujeresViudas;
	var contadorMujeresCasadas;
	var contadorMujeresSolteras;
	var nacionalidadMaximaTemperatura;
	var maximaTemperatura;
	var cantidadMujeresSolterasoViudas;
	var banderaMaximaTemperatura;
	var promedioEdadMujeresCasadas;
	var contadorTerceraEdadConMasDe38;
	banderaMaximaTemperatura="si";
	contadorMujeresSolteras=0;
	contadorMujeresCasadas=0;
	contadorMujeresViudas=0;
	acumuladorEdadMujeresCasadas=0;
	contadorTerceraEdadConMasDe38=0;
	contadorSolterosMayoresDeEdad=0;
	seguir="si";
	while(seguir=="si")
	{
		nombre=prompt("ingrese nombre");
		nacionalidad=prompt("Ingrese nacionalidad");
		edad= prompt("ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad))
		{
		edad= prompt("ingrese edad");
		edad=parseInt(edad);						
		}
		genero= prompt("ingrese genero f o m ");
		while(genero!="f" && genero!="m")//ME PEDIA DEVUELTA EDAD POR EL ";" al final del-> while(genero!="f" && genero!="m");
		{
			genero= prompt("ingrese genero f o m ");
		} 
		estadoCivil= prompt("ingrese estado Civil(soltero, casado o viudo)");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil= prompt("ingrese estado Civil(soltero, casado o viudo)");
		}
		temperatura= prompt("ingrese temp corporal");
		temperatura= parseInt(temperatura);
//estado civil 
		switch(estadoCivil)
		{
			case "soltero":
			if(edad>17)
			{
				contadorSolterosMayoresDeEdad++;
			}
			if(genero=="f")
			{
				contadorMujeresSolteras++;
			}
			break;
			case "viudo":
			if(genero=="f")
			{
				contadorMujeresViudas++;
			}
			break;
			case "casado":
			if(genero=="f")
			{
				contadorMujeresCasadas++;
				acumuladorEdadMujeresCasadas+=edad;
			}
			break;
		}
//Temperatura Maxima
	if(temperatura>maximaTemperatura ||banderaMaximaTemperatura=="si")
	{
		maximaTemperatura=temperatura;
		nacionalidadMaximaTemperatura=nacionalidad;
		banderaMaximaTemperatura="no";
	}
//Tercera edad con mas de 38
	if(edad>60 && temperatura>38)
	{
		contadorTerceraEdadConMasDe38++;
	}

	seguir= prompt("desea seguir?si/no");
	}//FIN DEL WHILE

	cantidadMujeresSolterasoViudas= contadorMujeresViudas + contadorMujeresSolteras;
	alert("la cantidad de cantidadMujeresSolterasoViudas es "+cantidadMujeresSolterasoViudas);
	alert("la nacionalidad de la persona con mas temp es "+nacionalidadMaximaTemperatura);
	alert("la cantidad de mayores de 60 conmas de 38 es "+contadorTerceraEdadConMasDe38);
	alert("la cantidad demayores de edad soltero es "+contadorSolterosMayoresDeEdad);
	if(contadorMujeresCasadas>0)
	{
		promedioEdadMujeresCasadas= acumuladorEdadMujeresCasadas/contadorMujeresCasadas;
		alert("el promedio Edad Mujeres Casadas  es "+ promedioEdadMujeresCasadas);
	}
	else
	{
		alert("no se puede dividir por 0, no hay mujers casadas")
	}
}

