/*Bienvenidos.
Realizar el algoritmo que permita el ingreso de 10 bolsas
 de alimento por prompt,con los kilos (validar entre 0 y 500) , 
 sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/

function mostrar()
{
	var kilos;
	var sabor;
	var promedioKilos;
	var bolsas;
	var acumuladorKilos;
	var minimoKilos;
	var saborMinimoKilos;
	var promedioKilosCarne;
	var cantidadCarne;
	var acumuladorKilosCarne;
	acumuladorKilosCarne=0;
	acumuladorKilos=0;
	cantidadCarne=0;
	bolsas=0;
	while(bolsas<2)//10
	{
		kilos= prompt("ingrese kilos entre 0 y 500");
		kilos= parseInt(kilos);
		while(isNaN(kilos)|| kilos<0 || kilos>500)
		{
		kilos= prompt("ingrese kilos entre 0 y 500");
		kilos= parseInt(kilos);			
		}
		sabor= prompt("ingrese sabor carne, vegetal o pollo");
		while(sabor!="carne" && sabor!="vegetal" && sabor!="pollo")
		{
			sabor= prompt("ingrese sabor carne, vegetal o pollo");
		}
		acumuladorKilos+=kilos;
		
		if(kilos<minimoKilos || bolsas==0)
		{
			minimoKilos=kilos;
			saborMinimoKilos= sabor;
		}
		switch(sabor)
		{
			case "carne":
			cantidadCarne++;
			acumuladorKilosCarne+=kilos;

			break;
		}

		bolsas++;

	}//FIN DEL WHILE
	if(cantidadCarne>0)///NO">"mayor a 0 
	{
		promedioKilosCarne= acumuladorKilosCarne/cantidadCarne;
		alert("La cantidad de carne es "+cantidadCarne+" y el promedio de kilos es "+promedioKilosCarne);
	}
	else
	{
		alert("no ingreso sabor carne");
	}
	promedioKilos=acumuladorKilos/bolsas;
	alert("el promedio de kilos es "+promedioKilos);
	alert("el mas liviano es de "+minimoKilos+ "y el sabor es "+saborMinimoKilos);
	
}