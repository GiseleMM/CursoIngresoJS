/*Mostrar información		
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/


function  mostrar()
{
	var i;
	var producto;
	var precio;
	var cantidad;
	var marcaFabricante;
	var importePorCompra;
	var acumuladorImportes;
	var banderaMininoPrecioDeAlcohol;
	var minimoPrecioDeAlcohol;
	var cantidadPrecioMinimoDeAlcohol;
	var marcaPrecioMinimoDeAlcohol;
	var acumuladorAlcohol;
	var acumuladorJabon;
	var acumuladorBarbijo;
	var productoConMasUnidades;
	var promedioProductoConMasUnidades;

	acumuladorImportes=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	banderaMininoPrecioDeAlcohol="si";
	i=0;
	while(i<2)//VA 5
	{
		producto= prompt("ingrese producto barbijo, jabon o alcohol");
		while(producto!="barbijo" && producto!="jabon" && producto!="alcohol")
		{
			producto= prompt("ingrese producto barbijo, jabon o alcohol");
		}
		precio= prompt("ingrese precio entre 100 y 300");
		precio= parseFloat(precio);
		while(isNaN(precio)|| precio<100 || precio>300)//;NO NO NO ;
		{
			precio= prompt("ingrese precio entre 100 y 300");
			precio= parseFloat(precio);
		}
		cantidad= prompt("ingrese cantidad no 0 ni superior a 1000 unidades");
		cantidad=parseInt(cantidad);
		while(isNaN(cantidad)||cantidad<1 || cantidad>1000)//si pongo cantidad<0incluye 0
		{
		cantidad= prompt("ingrese cantidad no 0 ni superior a 1000 unidades");
		cantidad=parseInt(cantidad);			
		}
		marcaFabricante= prompt("imgrese marca y fabricante");




		switch(producto)
		{
			case "barbijo":
			acumuladorBarbijo+=cantidad;
			if(precio<minimoPrecioDeAlcohol || banderaMininoPrecioDeAlcohol=="si")
			{
				minimoPrecioDeAlcohol= precio;
				cantidadPrecioMinimoDeAlcohol= cantidad;
				marcaPrecioMinimoDeAlcohol= marcaFabricante;
				banderaMasBaratoDeAlcohol="no";
			}
			break;
			case "alcohol":
			acumuladorAlcohol+=cantidad;
			break;
			case "jabon":
			acumuladorJabon+=cantidad;
			break;
		}
	
		importePorCompra=precio*cantidad;
		acumuladorImportes+=importePorCompra;

		i++;
	}//FIN DEL WHILE
	if(acumuladorJabon>acumuladorAlcohol)
	{
		if(acumuladorJabon>acumuladorBarbijo)
		{
			productoConMasUnidades="jabon";
			promedioProductoConMasUnidades= acumuladorJabon/i;
		}
		else
		{
			productoConMasUnidades="barbijo";
			promedioProductoConMasUnidades=acumuladorBarbijo/i;
		}
	}
	else
	{
		if(acumuladorAlcohol>acumuladorBarbijo)
		{
			productoConMasUnidades="alcohol";
			promedioProductoConMasUnidades= acumuladorAlcohol/i;
		}
		else
		{
			productoConMasUnidades="barbijo";
			promedioProductoConMasUnidades=acumuladorBarbijo/i;
		}
	}
	alert("el producto con mas unidades es "+productoConMasUnidades+" y el promedioProductoConMasUnidades es "+promedioProductoConMasUnidades);
	alert("el tipo mas barato de alcohol es " +marcaPrecioMinimoDeAlcohol+ " y  la cantidad es "+cantidadPrecioMinimoDeAlcohol);
	alert("la cantidad total de jabon es "+acumuladorJabon);
}





/* este ejercicio ponia un cnatador en marca, 
tipo para si concidian con la menor o mayor posicion me de el tipo y marca.
ponia posicionalcoholmasbararato=i+1; contador i
luego igualaba posicionalcoholbarato con posiciontipo== y si coincidian da ponia
que el tipo dela posiscion mas barata era ese.
function mostrar()
{
	var tipoProducto;
	var alcoholBarato;
	var cantidadProducto;
	var precioProducto;
	var marcaFabricante;
	var marcaAlcoholBarato;
	var promedioDelTipoConMasUnidades;
	var tipoConMasUnidades;
	var mayorCantidadDeUnidadesPorTipo;
	i=0;
	banderaAlcoholBarato="si";
	cantidadAlcoholBarato=0;
	cantidadBarbijo=0;
	cantidadAlcohol=0;
	cantidadJabon=0;
	//marcaAlcoholBarato=0; SI La INICIALIZO CONCATENA 0 y la MARCA: 0MARCAX

	while(i<2)//VA 5
	{
		cantidadAlcoholBarato=0;
		tipoProducto= prompt("Ingrese producto: ");
		while(tipoProducto!="barbijo" && tipoProducto!="jabón" && tipoProducto!="alcohol")
		{
			tipoProducto= prompt("producto no valido, ingrese otro")
		}		


		precioProducto= prompt("ingrese precio del producto:");
		precioProducto= parseInt(precioProducto);
		while(precioProducto<100 || precioProducto>300)
		{
			precioProducto= prompt("precio no valido,  carge otra vez:")
			precioProducto= parseInt(precioProducto);
		}
		
		cantidadProducto= prompt("ingrese cantidad del producto:");
		cantidadProducto=parseInt(cantidadProducto);
		while(cantidadProducto<1||cantidadProducto>1000)
		{
			cantidadProducto= prompt("cantidad no valida, ingrese otra cantidad:");
			cantidadProducto= parseInt(cantidadProducto);
		}
		posicionCantidad= i+1;
		
		marcaFabricante= prompt("ingrese marca:")
		posicionMarca= i+1;

		
		if(tipoProducto=="alcohol")
		{
			cantidadAlcohol+=cantidadProducto;	//ACUMULADOR ALCOHOL

			if(precioProducto<alcoholBarato || banderaAlcoholBarato=="si")	//ALCOHOL MAS BARATO Minimo de un tipo
			{
				alcoholBarato= precioProducto;
				posicionAlcoholBarato= i+1;
				banderaAlcoholBarato="no";
			}
		}
		if(posicionAlcoholBarato==posicionCantidad && posicionAlcoholBarato==posicionMarca)
		{
			cantidadAlcoholBarato=cantidadProducto;
			marcaAlcoholBarato= marcaFabricante;
		}
		if(tipoProducto=="barbijo")
		{
			cantidadBarbijo+=cantidadProducto;	//ACUMULADOR BARBIJO
		}
		if(tipoProducto=="jabón")
		{
			cantidadJabon+=cantidadProducto;	//ACUMULADOR JABON
		}
		if(cantidadAlcohol>cantidadBarbijo)	//TIPO CON MAS UNIDADES 
		{
			if(cantidadAlcohol>cantidadJabon)
			{
				//alert("la cantidad de alcohol es esl tipo con mas unidades: "+cantidadAlcohol);
				tipoConMasUnidades="alcohol";
				mayorCantidadDeUnidadesPorTipo=cantidadAlcohol;
			}
			else
			{
				//alert("la cantidad de Jabon es el tipo con mas unidades: "+cantidadJabon);
				tipoConMasUnidades="jabon";
				mayorCantidadDeUnidadesPorTipo=cantidadJabon;
			}
		}
		else
		{
			if(cantidadBarbijo>cantidadJabon)
			{
				//alert("la cantidad de barbijo es el tipo con mas unidades "+cantidadBarbijo);
				tipoConMasUnidades="barbijo";
				mayorCantidadDeUnidadesPorTipo=cantidadBarbijo;
			}
			else
			{
				//alert("la cantidad de jabon es el tipo con mas unidades " + cantidadJabon);
				tipoConMasUnidades="jabon";
				mayorCantidadDeUnidadesPorTipo=cantidadJabon;
			}

		}


		i++;
	}
	promedioDelTipoConMasUnidades=mayorCantidadDeUnidadesPorTipo/i;
//B)
	alert("el promedio del tipo con mas unidades "+tipoConMasUnidades+" es " +promedioDelTipoConMasUnidades);
//A)
	alert("el precio del alcohol mas barato es:"+alcoholBarato+", la cantidad de unidades es: "+cantidadAlcoholBarato+" y la marca es:"+ marcaAlcoholBarato);
//C)
	alert("las unidades total de jabon es "+ cantidadJabon);	
}
*/