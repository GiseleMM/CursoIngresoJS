/*
EJERCIO 1 RECUPERATORIO PARCIAL
Ingrese datos
Mostrar información
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
	var producto;
	var contadorProductos;
	var precio;
	var cantidadUnidades;
	var marcaFabricante;
	var jabonMasCaro;
	var banderaJabonMasCaro;
	var posicionJabonMasCaro;
	var posicionCantidad;// UBICACION DE CADA CANTIDAD 
	var posicionMarca;// UBICACION DE CADA MARCA 	NO LA INICIALIZO XQ QUEDA: 0MARCA
	var cantidadJabonMasCaro;
	var marcaJabonMasCaro;
	var sumaDeCantidadesDeJabon;
	var sumaDeCantidadesDeAlcohol;
	var sumaDeCantidadesDeBarbijo;
	var posicionCantidad;

	posicionCantidad=0;
	sumaDeCantidadesDeJabon=0;
	sumaDeCantidadesDeBarbijo=0;
	sumaDeCantidadesDeAlcohol=0;
	jabonMasCaro=0;
	cantidadJabonMasCaro=0;
	marcaJabonMasCaro=0;
	posicionJabonMasCaro=0;
	posicionCantidad=0;
	banderaJabonMasCaro="si";
	contadorProductos=0;
	while(contadorProductos<2)//VA 5 
	{
//PRODUCTO
		producto= prompt("Ingrese producto:barbijo/jabón/alcohol ");
//VALIDACION DE PRODUCTO
		while(producto!="barbijo" && producto!="jabon" && producto!="alcohol")
		{
			producto= prompt("Ingrese producto:barbijo/jabón/alcohol ");
		}
//PRECIO
		precio= prompt("ingrese precio entre 100 y 300");
		precio= parseInt(precio);
//VALIDACION PRECIO
		while(precio<100 || precio>300)
		{
			precio= prompt("ingrese precio entre 100 y 300");
			precio= parseInt(precio);			
		}
//CANTIDAD		
		cantidadUnidades= prompt("Ingrese cantidad de 1 a 1000");
		cantidadUnidades= parseInt(cantidadUnidades);
//VALIDACION CANTIDAD		
		while(cantidadUnidades<1 || cantidadUnidades>1000)// CUIDADE CON  <ESTO EXCLUYE RANGO> ASI >JJJY>NO 
		{
			cantidadUnidades= prompt("Ingrese cantidad de 1 a 1000");
			cantidadUnidades= parseInt(cantidadUnidades);		
		}
		posicionCantidad=contadorProductos+1;//				POSICION DE CADA CANTIDAD
//MARCA		
		marcaFabricante= prompt("ingrese Marca");
		posicionMarca=contadorProductos+1;//				POSICION DE CADA MARCA
//A
		switch(producto)
		{
			case "jabon":
			sumaDeCantidadesDeJabon+=cantidadUnidades;//		ACUMULADOR DE CANTIDAD DE JABON
			if(precio>jabonMasCaro || banderaJabonMasCaro=="si")//	JABON MAS CARO "||"<no olvidar 
			{
				jabonMasCaro=precio;
				posicionJabonMasCaro=contadorProductos+1;
				banderaJabonMasCaro="no";
			}
			if(posicionJabonMasCaro==posicionCantidad && posicionJabonMasCaro==posicionMarca)
			{
				cantidadJabonMasCaro=cantidadUnidades;
				marcaJabonMasCaro=marcaFabricante;
			}
			break;
			case "alcohol":
			sumaDeCantidadesDeAlcohol+=cantidadUnidades;//		ACUMULADOR DE CANTIDAD DE ALCOHOL
			break;
			case "barbijo":
			sumaDeCantidadesDeBarbijo+=cantidadUnidades;//		ACUMULADOR DE CANTIDAD BARBIJO
			break;
		}
//B																EL PRODUCTO CON MAS CANTIDAD DE UNIDADES
		if(sumaDeCantidadesDeJabon>sumaDeCantidadesDeAlcohol)
		{
			if(sumaDeCantidadesDeJabon>sumaDeCantidadesDeBarbijo)
			{
				tipoDeProductoConMasUnidades="jabon";
				cantidadDelTipoConMasUnidades= sumaDeCantidadesDeJabon;
			}
			else
			{
				tipoDeProductoConMasUnidades="barbijo";
				cantidadDelTipoConMasUnidades= sumaDeCantidadesDeBarbijo;
			}
		}
		else
		{
			if(sumaDeCantidadesDeAlcohol>sumaDeCantidadesDeBarbijo)
			{
				tipoDeProductoConMasUnidades="alcohol";
				cantidadDelTipoConMasUnidades=sumaDeCantidadesDeAlcohol;
			}
			else
			{
				tipoDeProductoConMasUnidades="barbijo";
				cantidadDelTipoConMasUnidades=sumaDeCantidadesDeBarbijo;
			}
		}	





	alert("uno");		
	

	contadorProductos++
	}//		FIN DEL WHILE DE PRODUCTOS 
//B PROMEDIO
		promedioPorCompra= cantidadDelTipoConMasUnidades/contadorProductos;
//SALIDAS
		alert("el jabon mas caro es de marca "+marcaJabonMasCaro+" y la cantidad es "+ cantidadJabonMasCaro);
		alert("el tipo de producto con más unidades en total de la compra es "+tipoDeProductoConMasUnidades+" y el promedio por compra es"+promedioPorCompra);
		alert("la cantidad total de barbijos es "+sumaDeCantidadesDeBarbijo);



}
