/*Enunciado:
Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que
 continente le gustaria visitar
y la cantidad de días , la oferta dice que por día
 se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 15% de descuento y si ademas paga 
por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además 
paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito
 se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de
 impuesto al cheque*/
function mostrar()
{
	var destino;
	var dias;
	var formaDePago;
	var precio;
	var descuento;
	var recarga;
	descuento=0;
	recarga=0;
	var precioFinal;

	destino= selecContinente.value;
	formaDePago=selecPago.value;
	dias= prompt("ingrese dias");
	dias=parseInt(dias);
	precio=dias*100;

	switch(destino)
	{
		case "America":
		descuento=precio*0.15;
			switch(formaDePago)
			{
				case "Cheque":
				recarga=precio*0.15;
				break;
				case "Débito":
				descuento=precio*0.25;
				break;
			}
		break;	
		case "África":
		case "Oceania":
		descuento=precio*0.30;
			switch(formaDePago)
			{
				case "Cheque":
				recarga=precio*0.15;
				break;
				case "MercadoPago":
				case "Efectivo":
				descuento=precio*0.45;//sume al descuento del 30 y por pago en efectivo 15
				break;
			}
		break;
		case "Europa":
		descuento= precio*0.20;
			switch(formaDePago)
			{
				case "Cheque":
				recarga=precio*0.15;
				break;
				case "Débito":
				descuento= precio*0.35;
				break;
				case "MercadoPago":
				descuento= precio*0.30;
				break;
				default:
				descuento=precio*0.25;
				break;
			}
		break;
		case "Asia":
		recarga=precio*0.20;
		switch(formaDePago)
		{
			case "Cheque"://PUSE MAL cheque === triple igualdad
			recarga=precio*0.35;
			break;
		}
		break;
	}
precioFinal= (precio-descuento)+recarga;
alert("el precio final es "+precioFinal+" el descuento fue de "+descuento+ " y la recarga es de "+recarga);


}
