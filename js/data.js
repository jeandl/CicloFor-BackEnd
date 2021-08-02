alert("¡Bienvenido a nuestro sistema de usuarios!");

var cantidad = prompt("¿Cuántos usuarios estarán usando el sistema?");

document.write("<h2>" + "Tabla de los usuarios aesthethic" + "</h2>");

for(i = 1; i<=cantidad; i++){    

    alert("A continuación, introduzca los datos del usuario #" + i)
    
    var nombre = prompt("Introduzca su nombre.")
    var apellido = prompt("Introduzca su apellido.")
    var edad = prompt("Introduzca su edad.");
    var school = prompt("Introduzca el nombre de su escuela actual.");
    var subject = prompt("Introduzca su asignatura favorita.");

    document.write("<h3>" + i + " - Datos de "+ nombre +"</h3>");
	document.write("Nombre completo: " + nombre + " " + apellido + "<br>");
    document.write("Edad: " + edad + " años" + "<br>");
    document.write("Escuela: " + school + "<br>");
    document.write("Materia favorita: " + subject + "<br>" + "<br>");
}