
/*Ingrese datos
Mostrar información
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra
 productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  var productos;
  var cantidadDeBolsas;
  var precioPorBolsa;
  var descuento;
  var seguir;
  var importePorCompra;
  var importeConDescuento;
  var acumuladorImportePorCompra;
  var acumuladorCantidadDeBolsas;
  var acumuladorBolsasCal;
  var acumuladorBolsasArena;
  var acumuladorBolsasCemento;
  var maximaCompra;
  var banderaMaximaCompra;
  var tipoMasCaro;
  var tipoConMasCantidadDeBolsas;
  banderaMaximaCompra="si";
  acumuladorBolsasCemento=0;
  acumuladorBolsasArena=0;
  acumuladorBolsasCal=0;
  descuento=0;
  seguir="si";
  acumuladorImportePorCompra=0;
  acumuladorCantidadDeBolsas=0;

  while(seguir=="si")
  {
    productos= prompt("ingrese producto: arena, cal o cemento");
    while(productos!="arena" && productos!="cal" && productos!="cemento")
    {
      productos= prompt("ingrese producto: arena, cal o cemento");
    }
    cantidadDeBolsas= prompt("ingrese cantidad de bolsas");
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
    while(isNaN(cantidadDeBolsas))
    {
      cantidadDeBolsas= prompt("ingrese cantidad de bolsas");
    }
    precioPorBolsa= prompt("ingrese precio Por Bolsa ");
    precioPorBolsa= parseFloat(precioPorBolsa);
    while(isNaN(precioPorBolsa)|| precioPorBolsa<1)
    {
    precioPorBolsa= prompt("ingrese precio Por Bolsa ");
    precioPorBolsa= parseFloat(precioPorBolsa);
    }
//IMPORTE POR COMPRA   
    importePorCompra= precioPorBolsa*cantidadDeBolsas;
    acumuladorImportePorCompra+=importePorCompra;
//TIPO MAS CARO
    if(importePorCompra>maximaCompra || banderaMaximaCompra=="si")
    {
      maximaCompra=importePorCompra;
      tipoMasCaro=productos;
      banderaMaximaCompra="no";
    }   
//DESCUENTO En CUENTO ACUMULADOR DE CANTIDAD DE BOLSAS
    acumuladorCantidadDeBolsas+=cantidadDeBolsas;
    if(acumuladorCantidadDeBolsas>30)
    {
      descuento=acumuladorImportePorCompra*0.25;
    }
    else
    {
      if(acumuladorCantidadDeBolsas>10)
      {
        descuento=acumuladorImportePorCompra*0.15;
      }
    }
// TIPO CON MAS CANTIDAD DE BOLSAS
    switch(productos)
    {
      case "arena":
      acumuladorBolsasArena+=cantidadDeBolsas;
      break;
      case "cal":
      acumuladorBolsasCal+=cantidadDeBolsas;
      break;
      case "cemento":
      acumuladorBolsasCemento+=cantidadDeBolsas;
      break;
    }
  
//TENGO Q CALCULAR LA MAYOR CANTIDAD DE BOLSAS CON IGUAL CANTIDADES
/*if(acumuladorBolsasCemento>acumuladorBolsasCal)
{
  if(acumuladorBolsasCemento>acumuladorBolsasArena)
  {
    tipoConMasCantidadDeBolsas="cemento";
  }
  else
  {
    if(acumuladorBolsasCemento==acumuladorBolsasArena)
    {
      tipoConMasCantidadDeBolsas="cemento y arena";
    } 
    else
    {
      tipoConMasCantidadDeBolsas="arena";
    }
  }
  else
  {
    if(acumuladorBolsasCemento==acumuladorBolsasCal)
    {
      tipoConMasCantidadDeBolsas= "cemento y cal";
    }
    else
    {
      if(acumuladorBolsasCal>acumuladorBolsasArena)
      {
        tipoConMasCantidadDeBolsas="Cal";
      }
      else
      {
        if(acumuladorBolsasCal==acumuladorBolsasArena)
        {
          tipoConMasCantidadDeBolsas="Cal y arena"
        }
        else
        {
          tipoConMasCantidadDeBolsas="Arena";
        }
      }
    }
  }
}
*/

//PRUEBO CON WHILE
if(acumuladorBolsasArena>acumuladorBolsasCal)
{
  if(acumuladorBolsasArena>acumuladorBolsasCemento)
  {
    tipoConMasCantidadDeBolsas="ARENA";
  }
  else
  {
    tipoConMasCantidadDeBolsas="CEMENTO";
  }
}
else
{
  if(acumuladorBolsasCal>acumuladorBolsasCemento)
  {
    tipoConMasCantidadDeBolsas="CAL";
  }
  else
  {
    tipoConMasCantidadDeBolsas="CEMENTO";
  }
}


    seguir=prompt("desea continuar?si/no");

  }//FIN DEL WHILE
  importeConDescuento= acumuladorImportePorCompra - descuento; 
  document.write("el importe sin descuento es "+acumuladorImportePorCompra+"<br>");
  document.write("el immporte con descuento  si corresponde es "+importeConDescuento+"<br>");
  document.write("el tipo mas caro es"+tipoMasCaro+"<br>");
  document.write("el tipo con mas canttidad de bolsa es "+tipoConMasCantidadDeBolsas+"<br>");

}//FIN DE LA FUCNCTION





/*function mostrar()
{
  var tipoConMasBolsa;
  var posicionCantidad; //PARA SACAR LA MAYOR CANTIDAD DE BOLSA y ASI EL TIPO MAS CARO
  var posicionProducto; //PARA SACAR LA MAYOR CANTIDAD DE BOLSA y ASI EL TIPO MAS CARO
  var maximoDeBolsa;
  var importeTotal;
  var precioBolsaArena;
  var precioBolsaCal;
  var precioBolsaCemento;
  var producto;
  var cantidadBolsaArena;
  var cantidadBolsaCal;
  var cantidadBolsaCemento;
  var sumaCantidadDeBolsas;
  var seguir;
  seguir="si";
  importeTotal=0;
  sumaImporteTotal=0;
  cantidadBolsaCemento=0;
  cantidadBolsaCal=0;
  cantidadBolsaArena=0;
  sumaCantidadDeBolsas=0;
  posicionCantidad=0;
  descuento=0;
  banderaCantidadDeBolsa="si";
  posicionProducto=0;
  while(seguir=="si")
  {
    producto= prompt("Ingrese producto requerido: " );
    while(producto!="arena" && producto!="cal" && producto!="cemento")
    {
      producto= prompt("producto no valido, ingrese otro");
    }
    
    if(producto=="arena")
    {
      precioBolsaArena= 100;
      alert(" El precio por bolsa es 100");
    }
    if(producto=="cal")
    { 
      precioBolsaCal=200;
      alert("El precio por bolsa de cal es 200");
    }
    if(producto=="cemento")
    {
      precioBolsaCemento=300;
      alert("el precio por bolsa de cemento es 300");
    }
    posicionProducto+=1;

    
    cantidadDeBolsas= prompt( "Ingrese cantidad de bolsa de"+producto);//hasta aca estaba hecho
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
    if(cantidadDeBolsas>maximoDeBolsa || banderaCantidadDeBolsa=="si")// ME SIRVE PARA EL TIPO MAS CARO
   {
      maximoDeBolsa=cantidadDeBolsas;
      posicionCantidad+=1;
      banderaCantidadDeBolsa="no";
    }
    if(posicionCantidad==posicionProducto)
    {
      tipoConMasBolsa= producto;
    }


   if(producto=="cal")
    {
      //MAÑANA ver como crearacumulador de cantidad delmismo tipocantidad acumulador 
      importeTotal=cantidadDeBolsas* precioBolsaCal;
      cantidadBolsaCal+=cantidadDeBolsas;
    }
    if(producto=="cemento")
    {
      importeTotal=cantidadDeBolsas*precioBolsaCemento; //IMPORTE SIN DESCUENTO
      cantidadBolsaCemento+=cantidadDeBolsas;
    }
    if(producto=="arena")
    {
      importeTotal=cantidadDeBolsas*precioBolsaArena;
      cantidadBolsaArena+=cantidadDeBolsas; //ACUMULADOR CANTIDAD DE BOLSAS DE ARENA
    }


    seguir= prompt("desea seguir?: "); 
    sumaImporteTotal+=importeTotal; //acumulador de cada compra
    sumaCantidadDeBolsas+=cantidadDeBolsas;//ACUMULADOR DE CANTIDADCree una variable para guardar la cantidad de bolsas

  }//FIN DEL WHILE
    
    if(cantidadBolsaCal>cantidadBolsaCemento)      //MAYOR CANTIDAD DE BOLSAS DEL MISMO TIPO
    {
      if(cantidadBolsaCal>cantidadBolsaArena)
      {
        tipoMayorCantidadDeBolsa=" cal ";
        cantidadTotalDeBolsaDeUnTipo=cantidadBolsaCal;
      }
      else
      {
        tipoMayorCantidadDeBolsa=" arena ";
        cantidadTotalDeBolsaDeUnTipo=cantidadBolsaArena;
      }
    }
    else
    {
      if(cantidadBolsaCemento>cantidadBolsaArena)
      {
        tipoMayorCantidadDeBolsa=" cemento";
        cantidadTotalDeBolsaDeUnTipo=cantidadBolsaCemento;
      }
      else
      {
        tipoMayorCantidadDeBolsa=" arena ";
        cantidadTotalDeBolsaDeUnTipo= cantidadBolsaArena;
      }
    }  

  alert("el tipo con mas cantidad de bolsa es "+tipoMayorCantidadDeBolsa+" y la cantidad es"+ cantidadTotalDeBolsaDeUnTipo);
  alert("el tipo mas caro es: "+producto);
  alert("el importe total a pagar sin descuento es"+sumaImporteTotal);
  alert("la cantidad de bolsas total es"+sumaCantidadDeBolsas);//NO ME LO PIDE PERO ME SIRVE PARA SACAR EL DESCUENTO
  //alert("la cantidad maxima de bolsa es:" +maximoDeBolsa);
  //alert( "el tipo con mas bolsa es "+tipoConMasBolsa); PIDE EL TIPO CONMAS CANTIDAD EN TOTAL NO MAXIMO

  if(sumaCantidadDeBolsas>30)
  {
    descuento= sumaImporteTotal*0.25;
  }
  else
  {
    if(sumaCantidadDeBolsas>10)
    {
      descuento= sumaImporteTotal*0.15;
    }    
  }
  /*if(sumaCantidadDeBolsas>10 && sumaCantidadDeBolsas<30)
  {
    descuento= sumaImporteTotal*0.15;
  }
  if(sumaCantidadDeBolsas>30)
  {
    descuento= sumaImporteTotal*0.25;
  }
  precioFinal= sumaImporteTotal-descuento;
  alert(precioFinal);
}
//document.write(producto);*/