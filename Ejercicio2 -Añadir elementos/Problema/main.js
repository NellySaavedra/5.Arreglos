// Ejercicio #2: Añadir elementos a un array con push(Ciclo for)

alert("Tenemos una lista incompleta de las alumnas de laboratoria, necesitamos que la complete por favor")
alert("Nelly, Griss, Anita, Pato son las alunmas contempladas")

var R = prompt("¿Cuántas alumnas más serán anotadas?")
var myArray= ["Nelly", "Griss", "Anita", "Pato"]

for (C=1; C <= R; C = C+1) {
	
	// Esta variable debe ir dentro, de lo contrario el ciclo no funcionará
	var Nombre = prompt("¿cuáles son sus nombres?") 
	myArray.push([Nombre]);
}
alert("La lista completa es: " + myArray)



