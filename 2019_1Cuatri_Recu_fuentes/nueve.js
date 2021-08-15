/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante,
 la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino*/
function mostrar()
{
    var nombre;
    var edad;
    var genero;
    var nota;
    var seguir;
    var contadorM;
    var acumuladorNotasM;
    var contadorF;
    var acumuladorNotasF;
    var contadorAprobadosM;
    var promedioNotasF;
    var promedioNotasM;
    var acumuladorNotasMayoresDeEdad;
    var acumuladorNotasMenoresDeEdad;
    var acumuladorNotasAdolecentes;
    var contadorMayoresDeEdad;
    var contadorMenoresDeEdad;
    var contadorAdolecente;
    var promedioNotasMayoresDeEdad;
    var promedioNotasMenoresDeEdad;
    var promedioNotasAdolecentes;
    acumuladorNotasAdolecentes=0;
    acumuladorNotasMenoresDeEdad=0;
    acumuladorNotasMayoresDeEdad=0;
    contadorAdolecente=0;
    contadorMenoresDeEdad=0;
    contadorMayoresDeEdad=0;
    contadorAprobadosM=0;
    acumuladorNotasF=0;
    acumuladorNotasM=0;
    contadorF=0;
    contadorM=0;
    seguir="si";
    while(seguir=="si")
    {
        nombre=prompt("ingrese nombre del estudiante");
        edad=prompt("ingrese edad");
        edad=parseInt(edad);
        while(isNaN(edad)|| edad<1)
        {
            edad=prompt("ingrese edad");
            edad=parseInt(edad);
        }
        genero= prompt("ingrese genero F o M ");
        while(genero!="F" && genero!="M")
        {
           genero= prompt("ingrese genero F o M ");  
        }
        nota= prompt("ingrese nota final");
        nota= parseFloat(nota);
        while(isNaN(nota)|| nota<0 || nota>10)
        {
            nota= prompt("ingrese nota final");
            nota= parseFloat(nota);          
        }
        switch(genero)
        {
            case "M":
            contadorM++;
            if(nota>7)
            {
                contadorAprobadosM++;
            }
            acumuladorNotasM+=nota;

            break;
            case "F":
            contadorF++;
            acumuladorNotasF+=nota;
            break;
        }
        if(edad<13)
        {
            acumuladorNotasMenoresDeEdad+=nota;
            contadorMenoresDeEdad++;
        }
        else
        {
            if(edad>=13 && edad<=17)
            {
                acumuladorNotasAdolecentes+=nota;
                contadorAdolecente++;
            }
            else//mayores de 17
            {
                acumuladorNotasMayoresDeEdad+=nota;
                contadorMayoresDeEdad++;
            }

        }


        seguir=prompt("desea seguir?si/no");
    }//FIN DEL WHILE
    if(contadorMayoresDeEdad>0)
    {
        promedioNotasMayoresDeEdad= acumuladorNotasMayoresDeEdad/contadorMayoresDeEdad;
        document.write("El promedio de notas de los mayores de edad es "+promedioNotasMayoresDeEdad+"<br>");
    }
    else
    {
        document.write("no se puede cancular el promedio de mayores de edad"+"<br>");
    }
    if (contadorMenoresDeEdad>0)
    {
        promedioNotasMenoresDeEdad= acumuladorNotasMenoresDeEdad/contadorMenoresDeEdad;
        document.write("el promedio de notas de los menores de edad es "+promedioNotasMenoresDeEdad+"<br>");
    }
    else
    {
       document.write("No se pudo calcular el promedio de menores de edad"+"<br>"); 
    }
    if(contadorAdolecente>0)
    {
        promedioNotasAdolecentes= acumuladorNotasAdolecentes/contadorAdolecente;
        document.write("el promedio de nota de los adolecentes es "+promedioNotasAdolecentes+"<br>");
    }
    else
    {
        document.write("no se puede calvcular el promedio para adolecente"+"<br>");
    }
    promedioNotasM= acumuladorNotasM/contadorM;
    promedioNotasF=acumuladorNotasF/contadorF;
    document.write("el promedio de nota de los varones es "+promedioNotasM+" y el femenino es "+promedioNotasF+"<br>");
    document.write("la cantidadde varones aprobados es "+contadorAprobadosM+"<br>");
}
