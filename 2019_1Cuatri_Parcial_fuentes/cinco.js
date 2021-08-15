/*Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 ,
 que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito 
se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago 
o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le 
agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/
function mostrar()
{
	var destino;
	var formaDePago;
	var descuento;
	var precio;
	var recargo;
	var precioFinal;
	var dias;
	recargo=0;
	descuento=0;
	destino= Marca.value;
	dias=prompt("ingrese dias");
	dias=parseInt(dias);
	formaDePago= prompt("ingrese forma de pago");
	precio=dias*100;
	switch(destino)
	{
		case"América":
		descuento=precio*0.50;
		switch(formaDePago)
		{
			case "debito":
			descuento+=precio*0.10;//EN el otro ejercicio sume el desc voy a ver si funciona acumulando  descuento;
		}
		break;
		case"África":
		descuento= precio*0.60;
		switch(formaDePago)
		{
			case "efectivo":
			case "mercadopago":
			descuento+=precio*0.15;
			break;
		}
		break;
		case"Europa":
		descuento= precio*0.20;
		switch(formaDePago)
		{
			case "debito":
			descuento+=precio*0.15;
			break;
			case "mercadopago":
			descuento+=precio*0.10;
			break;
			default:
			descuento+=precio*0.05///0.5 Sesto es el 50% y yo quiero el 5%///
			break;
		}
		break;
		case"Oceania":
		case"Asia":
		recargo=precio*0.20
		break;
	}
precioFinal= precio - descuento + recargo;
alert("el precio Final es "+precioFinal+" el descuento es "+descuento+" y el recargo es de "+recargo);
}
