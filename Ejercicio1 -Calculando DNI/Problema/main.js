// Ejercicio #1: Calculando DNI

var DNI = parseInt(prompt("Indique el número de su DNI"))
var Resto = DNI%23


var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (DNI<0 || DNI>99999999){
	alert ("Número invalido, inicie nuevamnete el proceso.")
}

else if (DNI>0 && DNI<99999999) {
	alert("Observe las siguintes letras y el orden que ocupan: " + letras)
	var LetraUsuario = prompt("Indique la letra que crea corresponde a su DNI. no olvide escribir en mayúsculas")
	
		if (letras[Resto] == LetraUsuario){
			alert("Su letra es correcta")
		}
		else {
			alert("Su letra es incorrecta.")
			alert("La letra de su DNI es "+ letras[Resto] + " ya que el resto es " + Resto)
		}
}



