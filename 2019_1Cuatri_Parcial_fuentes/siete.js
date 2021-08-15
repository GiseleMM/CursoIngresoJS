/*
 gisele Medina Div H

 Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas 
en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) 
de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/

var altura;
var sexo;
var jugadores;
var promedioAltura;
//var maximaAltura;
var minimaAltura;
var puestoMinima;
var puestoSexo;
var sexoAlturaBaja;
var banderaAltura;

jugadores=0;
mujeres=0
alturaTotales=0;
banderaAltura="si";

function mostrar()
{
	while(jugadores<5)
	{
		altura= prompt("ingrese altura en centimetros");
		altura= parseInt(altura);
		while(altura<0 || altura>250)
		{
			altura= prompt("REingrese altura en centimetros");
			altura= parseInt(altura);
		}
	/*	if(altura>maximaAltura || banderaAltura=="si")
		{
			maximaAltura=altura;

		}*/

		if(altura<minimaAltura || banderaAltura=="si")
		{
			minimaAltura= altura;
			puestoMinima= jugadores+1;
			banderaAltura="no";
		}
		alturaTotales+=altura;//ACUMULADOR Suma de alturas
		sexo= prompt("Ingrese sexo 'f' o 'm': ");
		while(sexo!="f" && sexo!= "m")
		{
			sexo= prompt("REingrese sexo'f' 'm': ");
		}
		puestoSexo= jugadores+1;//Contador sexo
		if(puestoSexo==puestoMinima)
		{
			sexoAlturaBaja= sexo;
		}
		if(sexo=="f" && altura>190)
		{
			mujeres++;
		}

		jugadores++;
	}


	//alert("altura totales : "+alturaTotales);
	promedioAltura= alturaTotales/jugadores;
	alert("El promedio de la altura totalees es: "+promedioAltura);
	/*alert("la altura maxima es: "+ maximaAltura);
	alert("la altura minima es "+ minimaAltura+" y la posicion es:"+puestoMinima);
	alert("el sexo de la altura minima es: "+ sexoAlturaBaja);*/
	alert("la altura minima es :"+minimaAltura+" y el sexo es: "+ sexoAlturaBaja);
	if(mujeres==0)
	{
		alert(" no existen mujeres que superen los 190");
	}
	else
	{
		alert(" la cantidad de mujeres q supera los 190 centimetros es : "+ mujeres);
	}
}

/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros
(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, 
informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
function mostrar()
{
	var alturas;
	var genero;
	var i;
	var acumuladorAlturas;
	var promedioAlturas;
	var menorAltura;
	var generoMenorAltura;
	var contadorMujeres190;
	contadorMujeres190=0;
	i=0;
	acumuladorAlturas=0;
	while(i<5)
	{
		alturas= prompt("ingrese altura en centimetros");
		alturas=parseInt(alturas);
		while(isNaN(alturas)|| alturas<0 || alturas>250)
		{
			alturas= prompt("ingrese altura en centimetros");
			alturas=parseInt(alturas);		
		}
		genero= prompt("ingrese genero 'f' o 'm' ");
		while(genero!="m" && genero!="f")
		{
			genero= prompt("ingrese genero 'f' o 'm' ");
		}
		
		acumuladorAlturas+=alturas;
		if(alturas<menorAltura || i==0)
		{
			menorAltura=alturas;
			generoMenorAltura= genero;
		}
		if(genero=="f" && alturas>190)
		{
			contadorMujeres190++;
		}



		i++;
	}//FIN DEL WHILE

promedioAlturas= acumuladorAlturas/i;
alert("el promedio de alturas es "+ promedioAlturas);
alert("la menor altura es "+menorAltura+" y el sexo es "+generoMenorAltura);
alert("la cantidad de mujeres que superan los 190 es "contadorMujeres190);
}*/