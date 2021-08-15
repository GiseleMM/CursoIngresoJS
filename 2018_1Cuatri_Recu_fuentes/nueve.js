/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar 
el nombre de un animal del zoológico, el peso el cual debe
 ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas
 sean bajo cero.*/
function mostrar()
{
	var animal;
	var seguir;
	var peso;
	var temperatura;
	var banderaPesoMaximo;
	var animalPesoMaximo;
	var temperaturaPesoMaximo;
	var pesoMaximo;
	var temperaturaPares;
	var acumuladorPeso;
	var promedioPeso;
	var contadorAnimal;
	var minimoPesoBajoCero;
	var maximoPesoBajoCero;
	var banderaPesoBajoCero;
	var contadorAnimalBajoCero;

	acumuladorPeso=0;
	contadorAnimal=0;
	contadorAnimalBajoCero=0;
	banderaPesoBajoCero="si";
	banderaPesoMaximo="si";
	seguir="si";
	

	while(seguir=="si")
	{
		animal=prompt("ingrese animal");
		peso= prompt("ingrese peso entre 1 y 1000");
		peso=parseFloat(peso);
		while(isNaN(peso)|| peso<1 || peso >1000)
		{
			peso= prompt("ingrese peso entre 1 y 1000");
			peso=parseFloat(peso);		
		}
		temperatura= prompt("ingrese tem entre -30 y 30");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)|| temperatura<-30 || temperatura>30)
		{
			temperatura= prompt("ingrese tem entre -30 y 30");
			temperatura=parseInt(temperatura);		
		}


//PESO
		contadorAnimal++;
		acumuladorPeso+=peso;
		if(peso>pesoMaximo || banderaPesoMaximo=="si")
		{
			pesoMaximo=peso;
			animalPesoMaximo=animal;
			temperaturaPesoMaximo=temperatura;
			banderaPesoMaximo="no";
		}
//TEMPERATURA		
		if(temperatura%2==0)
		{
			temperaturaPares++;
		}
		if(temperatura<0)
		{
			contadorAnimalBajoCero++;

//PESO DE TEMPERATURA BAJO CERO

			if(peso>maximoPesoBajoCero || banderaPesoBajoCero=="si")
			{
				maximoPesoBajoCero=peso;
			}
			if(peso<minimoPesoBajoCero || banderaPesoBajoCero=="si")
			{
				minimoPesoBajoCero=peso;
				banderaPesoBajoCero="no";
			}
		}

		
		seguir=prompt("desea seguir?si/no");

	}//FIN Del While
	promedioPeso= acumuladorPeso/contadorAnimal;
	document.write("la cantidad de temp par es "+temperaturaPares+"<br>");
	document.write("el peso maximo es "+pesoMaximo+" el animal es "+animalPesoMaximo+ " y la temp es "+temperaturaPesoMaximo+"<br>");		
	document.write("el promedio de peso es"+promedioPeso+"<br>");
	document.write("la cantidad deanimales bajo cero es "+contadorAnimalBajoCero+"<br>");
	document.write("el peso maximo bajo cero "+maximoPesoBajoCero+" y el minimo es"+minimoPesoBajoCero+"<br>");



}
