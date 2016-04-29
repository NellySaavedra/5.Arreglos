// Ejercicio #4: Operaciones en Arrays

//Base del ejercicio
var valores = [true, 5, false, "hola", "adios", 2];
alert("Observa estos datos: " + valores)

// Determinar cuál de los dos elementos de texto es mayor
var comparacion = valores[3] > valores[4];
alert("La palabra 'hola' es mayor que la palabra 'adios', por lo tanto la sentencia es " + comparacion);

// Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios
// para obtener un resultado true y otro resultado false
var a = valores[0];
var b = valores[2];

var R = (a == b);
alert("true y false no son lo mismo, por lo tanto el resultado de la comparacion es: " + R);
var OR = (a || b);
alert("En una disyunción si de 'a' o 'b' al menos uno es verdadero, la sentencia es: " + OR);

// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
alert("Ahora siguen las operaciones matemáticas con 5 y 2")
var V1 = valores[1];
var V2 = valores[5];

var suma = V1 + V2;
alert("5 + 2 = " + suma);

var resta = V1 - V2;
alert("5 - 2 = " + resta);
 
var m = V1 * V2;
alert("5 x 2 = " + m);

var d = V1 / V2;
alert("5 / 2 = " + d);

var r =V1 % V2;
alert("El resto de 5%2 es " + r);


