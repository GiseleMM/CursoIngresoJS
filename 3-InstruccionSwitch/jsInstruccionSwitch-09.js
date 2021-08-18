/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para
  vacacionar para poder calcular el precio final
-en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un descuento del 10% Mar del plata tiene un descuento del 20% 
-en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba
 tiene un aumento del 10% Mar del plata tiene un aumento del 20%
 - en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas
   tiene un aumento del 10% Mar del plata tiene un aumento del 10% y
    Cordoba tiene el precio sin descuento*/
function mostrar()
{
	var precioFinal;
	var descuentoAumento;
	var precioInicial;
	var estacionIngresada;
	var destinoIngresado;
	
	precioInicial= 15000;
	precioInicial= parseFloat(precioInicial);
	descuentoAumento20= precioInicial*0.20;
	descuentoAumento10= precioInicial* 0.10;
	estacionIngresada=txtIdEstacion.value;
	destinoIngresado= txtIdDestino.value;
	alert(destinoIngresado);
	alert(estacionIngresada);

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
			precioFinal= precioInicial + descuentoAumento20;
			break;
			case "Mar del plata":
			precioFinal= precioInicial - descuentoAumento20;
			break;
			default:
			precioFinal= precioInicial - descuentoAumento10;
			break; 

		}
		break;
		case "Verano":
		switch(destinoIngresado)
			{
				case "Bariloche":
				precioFinal= precioInicial - descuentoAumento20;
				break;
				case "Mar del plata":
				precioFinal= precioInicial + descuentoAumento20;
				break;
				default:
				precioFinal= precioInicial + descuentoAumento10;
			}
		break;
		case "Otoño":
		case "Primavera":
		{
			switch(destinoIngresado)
			{
				case "Cordoba":
				precioFinal= precioInicial;
				break;
				default:
				precioFinal= precioInicial + descuentoAumento10;
				break;
			}
		}

		break;
	}
	alert(precioFinal);

}//FIN DE LA FUNCIÓN