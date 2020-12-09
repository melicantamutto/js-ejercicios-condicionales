// Condicionales y operadores lógicos
// Ejercicios con operadores lógicos


// puedeVerPelicula(edad, tieneAutorizacion)

// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

const puedeVerPelicula = (edad, tieneAutorizacion) =>{
    if(edad >= 15 || tieneAutorizacion === true){
        alert(true);
    } else{
        alert(false);
    }
}

// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true

// estaEnRango(valor, minimo, maximo)

// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango = (valor, minimo, maximo) => (minimo <= valor && valor <= maximo) ? alert(true) : alert(false);

//estaEnRango(3, 1, 10)   // true
//estaEnRango(1, 1, 10)   // true
//estaEnRango(10, 1, 10)  // true
//estaEnRango(12, 1, 10)  // false
//estaEnRango(-3, 1, 10)  // false

// puedeAvanzar(colorSemaforo)

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

const puedeAvanzar = (colorSemaforo) =>{
    switch (colorSemaforo){
        case  'verde':
            alert(true);
            break;
        case 'amarillo':
            alert(false);
            break;
        case 'rojo':
            alert (false);
            break;
        default: 
            alert('Error: color de semáforo inválido');
    }
}

//puedeAvanzar('verde')     // true
//puedeAvanzar('amarillo')  // false
//puedeAvanzar('rojo')      // false
//puedeAvanzar('lila')      // 'Error: color de semáforo inválido'

// esVocal(letra)

// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.
const vocales = /^[aAeEiIoOuU]$/;
const esVocal = (letra) => (vocales.test(letra)) ? alert(true) : alert(false);

//esVocal('a') // true
//esVocal('n') // false

// esConsonante(letra)

// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es
const esConsonante = (letra) => (!vocales.test(letra)) ? alert(true) : alert(false);

//esConsonante('a') // false
//esConsonante('n') // true

// esHoraValida(hora)

// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

const esHoraValida = (hora) => {
    const horaArray = hora.split(':');
    if (Number(horaArray[0]) <= 23 && Number(horaArray[1]) <= 59){
        alert(true);
    } else{
        alert(false);
    }
}

//esHoraValida('12:23') // true
//esHoraValida('12:65') // false
//esHoraValida('28:05') // false
//esHoraValida('00:00') // true

// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)

// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

const puedeRenovarCarnet = (pasoTests, tieneMultasImpágas, pagoImpuestos) => (pasoTests && !tieneMultasImpágas && pagoImpuestos) ? alert(true) : alert(false);

//puedeRenovarCarnet(true, true, true)    // false
//puedeRenovarCarnet(true, true, false)   // false
//puedeRenovarCarnet(true, false, true)   // true
//puedeRenovarCarnet(true, false, false)  // false
//puedeRenovarCarnet(false, true, true)   // false
//puedeRenovarCarnet(false, true, false)  // false
//puedeRenovarCarnet(false, false, true)  // false
//puedeRenovarCarnet(false, false, false) // false

// puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)

// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => (asistencia >= 75 && materiasAprobadas >=50 && tesisAprobada) ? alert(true) : alert(false);

// puedeGraduarse(80, 50, true)  // true
// puedeGraduarse(80, 50, false) // false
// puedeGraduarse(80, 45, true)  // false
// puedeGraduarse(80, 45, false) // false
// puedeGraduarse(65, 50, true)  // false
// puedeGraduarse(33, 55, false) // false
// puedeGraduarse(42, 45, true)  // false
// puedeGraduarse(28, 45, false) // false


// Ejercicios con condicionales


// esParOImpar(numero)

// Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

const esParOImpar = (numero) =>{
    const resto = numero % 2;
    if(resto === 0){
        alert('par');
    } else{
        alert('impar');
    }
}
// esParOImpar(3)  // 'impar'
// esParOImpar(10) // 'par'

// esPositivoONegativo(numero)

// Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

const esPositivoONegativo = (numero) => (numero >= 0) ? alert('positivo') : alert('negativo');

// esPositivoONegativo(3)  // 'positivo'
// esPositivoONegativo(-5) // 'negativo'

// avanzarSemaforo(colorActual)

// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

const avanzarSemaforo = (colorActual) =>{
    switch (colorActual){
        case  'verde':
            alert('amarillo');
            break;
        case 'amarillo':
            alert('rojo');
            break;
        case 'rojo':
            alert ('verde');
            break;
        default: 
            alert('Error: color de semáforo inválido');
    }
}

//avanzarSemaforo('verde')     // 'amarillo'
//avanzarSemaforo('amarillo')  // 'rojo'
//avanzarSemaforo('rojo')      // 'verde'

// obtenerDiasMes(mes)

// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

const obtenerDiasMes = (mes) =>{
    switch (mes){
        case  'enero':
            alert('31');
            break;
        case 'febrero':
            alert('29');
            break;
        case 'marzo':
            alert ('31');
            break;
        case 'abril':
            alert ('30');
            break;
        case 'mayo':
            alert ('31');
            break;
        case 'junio':
            alert ('30');
            break;
        case 'julio':
            alert ('31');
            break;
        case 'agosto':
            alert ('31');
            break;
        case 'septiembre':
            alert ('30');
            break;
        case 'octubre':
            alert ('31');
            break;
        case 'noviembre':
            alert ('30');
            break;
        case 'diciembre':
            alert ('31');
            break;
    }
}

// obtenerDiasMes("diciembre") // 31
// obtenerDiasMes("febrero")   // 29

// obtenerGeneracion(anioNacimiento)

// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:
// Generación 	Años de nacimiento
// Baby boomer 	1949-1968
// Generación X 	1969-1980
// Millennials 	1981-1993
// Generación Z 	1994-2010

const obtenerGeneracion = (añoNacimiento) =>{
    if(añoNacimiento >= 1949 && añoNacimiento <= 1968){
        alert('Baby Boomer');
    } else if(añoNacimiento >= 1969 && añoNacimiento <= 1980){
        alert('Generación X');
    } else if(añoNacimiento >= 1981 && añoNacimiento <= 1993){
        alert('Millenials');
    } else if(añoNacimiento >= 1994 && añoNacimiento <= 2010){
        alert('Generación Z');
    } else {
        alert('Año no válido o sin información.')
    }
}

//obtenerGeneracion(2013);
//obtenerGeneracion(1951);
//obtenerGeneracion(1991);

// obtenerSensacion(temperatura)

// Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:
// Temperatura 	Mensaje
// Menor a 0° 	¡Está helando!
// Mayor o igual a 0° y menor a 15° 	¡Hace frío!
// Mayor o igual a 15° y menor a 25° 	Está lindo
// Mayor o igual a entre 25° y menor a 30° 	Hace calor
// Mayor o igual de 30° 	¡Hace mucho calor!

const obtenerSensacion = (temperatura) =>{
    if (temperatura< 0){
        alert('¡Está helando!')
    } else if (temperatura >= 0 && temperatura < 15){
        alert('¡Hace frío!');
    } else if (temperatura >=15 && temperatura < 25){
        alert('Está lindo');
    } else if (temperatura >= 25 && temperatura < 30){
        alert('¡Hace calor!');
    } else if (temperatura >= 30){
        alert('¡Hace mucho calor!');
    }
}

// obtenerSensacion(33) // "¡Hace mucho calor!"

// obtenerNota(puntaje)

// Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:
// Puntaje 	Nota
// Menor a 6 	Desaprobado
// Mayor o igual a 6 y menor a 7 	Regular
// Mayor o igual a 7 y menor a 8 	Bueno
// Mayor o igual a entre 8 y menor a 10 	Muy bueno
// 10 	Excelente
// Menor a 0 o mayor a 10 	Puntaje inválido

const obtenerNota = (puntaje) =>{
    if(puntaje<6){
            alert('Desaprobado');
    } else if (puntaje>=6 && puntaje < 7){
            alert('Regular');
    } else if (puntaje>=7 && puntaje < 8){
            alert ('Bueno');
    } else if (puntaje>=8 && puntaje < 10){
            alert ('Muy bueno');
    } else if (puntaje === 10){
            alert ('Excelente');
    } else if(puntaje<0 || puntaje>10){ 
            alert('Puntaje inválido');
    }
}

//obtenerNota(7)    // "Bueno"
//obtenerNota(9.6)  // "Excelente"
//obtenerNota(12)   // "Puntaje inválido"

// jugarPiedraPapelTijera(a, b)

// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

const jugarPiedraPapelTijera = (a, b) =>{
    if (a === 'tijera' && b === 'piedra'){
        alert('¡Ganó piedra!')
    } else if (a === 'piedra' && b === 'tijera'){
        alert('¡Ganó piedra!')
    } else if (a === 'papel' && b === 'piedra'){
        alert('¡Ganó papel!')
    } else if (a === 'piedra' && b === 'papel'){
        alert('¡Ganó papel!')
    } else if (a === 'papel' && b === 'tijera'){
        alert('¡Ganó tijera!')
    } else if (a === 'tijera' && b === 'papel'){
        alert('¡Ganó tijera!')
    } else if (a === 'piedra' && b === 'piedra'){
        alert('¡Empate!')
    } else if (a === 'tijera' && b === 'tijera'){
        alert('¡Empate!')
    } else if (a === 'papel' && b === 'papel'){
        alert('¡Empate!')
    }
}

//jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
//jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
//jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
//jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
//jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
//jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
//jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
//jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
//jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!