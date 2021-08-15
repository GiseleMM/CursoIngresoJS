/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos 
de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el 
total de la compra.
f) El tipo mas caro*/
function mostrar()
{
  var producto;
  var bolsas;
  var precioPorBolsa;
  var seguir;
  var importePorCompra;
  var acumuladorImportePorCompra;
  var acumuladorBolsasCal;
  var acumuladorBolsasCemento;
  var acumuladorBolsasArena;
  var mayorImporte;
  var banderaMayorImporte;
  var tipoMayorImporte;
  var descuento;
  var tipoConMasBolsa;
  descuento=0;
  acumuladorBolsasArena=0;
  acumuladorBolsasCemento=0;
  acumuladorBolsasCal=0;
  banderaMayorImporte="si";
  seguir="si";
  acumuladorImportePorCompra=0;
  while(seguir=="si")
  {
    producto=prompt("Ingrese producto cal arena o cemento");
    while(producto!="cal" && producto!="arena" && producto!="cemento")
    {
      producto=prompt("Ingrese producto cal arena o cemento");
    }
    bolsas= prompt("ingrese cantidad de bolsas");
    bolsas=parseInt(bolsas);
    while(isNaN(bolsas)|| bolsas<0)
    {
    bolsas= prompt("ingrese cantidad de bolsas");
    bolsas=parseInt(bolsas);      
    }
    precioPorBolsa=prompt("ingrese precio por bolsa");
    precioPorBolsa=parseFloat(precioPorBolsa);
    while(isNaN(precioPorBolsa)|| precioPorBolsa<0)
    {
    precioPorBolsa=prompt("ingrese precio por bolsa");
    precioPorBolsa=parseFloat(precioPorBolsa);      
    }

    importePorCompra=precioPorBolsa*bolsas;
    
    if(importePorCompra>mayorImporte || banderaMayorImporte=="si")
    {
      mayorImporte=importePorCompra;
      tipoMayorImporte= producto;
      banderaMayorImporte="no";
    }
    acumuladorImportePorCompra+=importePorCompra;
    acumuladorBolsas+=bolsas;

    switch(producto)
    {
      case "arena":
      acumuladorBolsasArena++;
      break;
      case "cal":
      acumuladorBolsasCal++;
      break;
      case "cemento":
      acumuladorBolsasCemento++;
      break;
    }

    seguir=prompt("Desea seguir?si/no");
  }//FIN DEL WHILE

if(acumuladorBolsasArena>acumuladorBolsasCemento)
{
  if(acumuladorBolsasArena>acumuladorBolsasCal)
  {
    tipoConMasBolsa="arena";
  }
  else
  {
    tipoConMasBolsa="Cal";
  }
}
else
{
  if(acumuladorBolsasCemento>acumuladorBolsasCal)
  {
    tipoConMasBolsa="cemento";
  }
  else
  {
    tipoConMasBolsa="cal";
  }
}


  if(acumuladorCantidadDeBolsas>30)
  {
    descuento= acumuladorImportePorCompra*0.25;
  }
  else
  {
    if(acumuladorCantidadDeBolsas>10)
    {
      descuento= acumuladorImportePorCompra*0.15
    }
    else
      {
        alert("no hay descuento")
      }
  }
  alert("la compra fue de "+acumuladorImportePorCompra - descuento);
  alert("el tipo con mas bosas es "+ tipoConMasBolsa);
  alert("el mayor importe es de tipo "+tipoMayorImporte);
}
