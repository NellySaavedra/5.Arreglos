// Ejercicio #5: Suma de números

// Hacer un ejercicio que nos pida 10 números y luego que sume esos valores.

alert("Vamos a hacer una suma")

var R = 10
var myArray= [ ]


for (C=1; C <= R; C = C+1) {
	
	// Esta variable debe ir dentro, de lo contrario el ciclo no funcionará
	var Numero = prompt("ingrese uno a uno los números del 1 al 10") 
	myArray.push([Numero]);
				// En esta caja se irán acumulando 10 dígitos [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
				                              // El índice va  0  1  2  3  4  5  6  7  8   9
}
var suma = parseInt(myArray[0]) + parseInt(myArray[1]) + 
		   parseInt(myArray[2]) + parseInt(myArray[3]) + 
		   parseInt(myArray[4]) + parseInt(myArray[5]) + 
		   parseInt(myArray[6]) + parseInt(myArray[7]) + 
		   parseInt(myArray[8]) + parseInt(myArray[9]) 

alert("La lista completa es: " + myArray)
alert("La suma es: " + suma)


