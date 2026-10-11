// EJERCICIO 1

function calcularSalario() {

    let salario = Number(document.getElementById("salario").value);

    let cargas = salario * 0.105;
    let renta = 0;

    if (salario > 4727000) {

        renta =
            (1347000 - 918000) * 0.10 +
            (2364000 - 1347000) * 0.15 +
            (4727000 - 2364000) * 0.20 +
            (salario - 4727000) * 0.25;

    } else if (salario > 2364000) {

        renta =
            (1347000 - 918000) * 0.10 +
            (2364000 - 1347000) * 0.15 +
            (salario - 2364000) * 0.20;

    } else if (salario > 1347000) {

        renta =
            (1347000 - 918000) * 0.10 +
            (salario - 1347000) * 0.15;

    } else if (salario > 918000) {

        renta = (salario - 918000) * 0.10;

    }

    let neto = salario - cargas - renta;

    document.getElementById("cargas").innerHTML =
        "Cargas sociales: ₡" + cargas.toFixed(2);

    document.getElementById("renta").innerHTML =
        "Impuesto de renta: ₡" + renta.toFixed(2);

    document.getElementById("neto").innerHTML =
        "Salario neto: ₡" + neto.toFixed(2);
}


// EJERCICIO 2

function cambiarMensaje() {

    document.getElementById("mensaje").innerHTML =
        "El contenido del párrafo fue cambiado con JavaScript.";

}


// EJERCICIO 3

function validarEdad() {

    let edad = Number(document.getElementById("edad").value);

    if (edad > 18) {

        document.getElementById("resultadoEdad").innerHTML =
            "Eres mayor de edad.";

    } else {

        document.getElementById("resultadoEdad").innerHTML =
            "Eres menor de edad.";

    }

}


// EJERCICIO 4

function mostrarEstudiantes() {

    let estudiantes = [
        {
            nombre: "Carlos",
            apellido: "Mora",
            nota: 85
        },
        {
            nombre: "Ana",
            apellido: "Rodríguez",
            nota: 90
        },
        {
            nombre: "Luis",
            apellido: "Gómez",
            nota: 78
        }
    ];

    let lista = "";
    let suma = 0;

    for (let i = 0; i < estudiantes.length; i++) {

        lista += estudiantes[i].nombre +
            " " +
            estudiantes[i].apellido +
            "<br>";

        suma = suma + estudiantes[i].nota;
    }

    let promedio = suma / estudiantes.length;

    document.getElementById("listaEstudiantes").innerHTML = lista;

    document.getElementById("promedio").innerHTML =
        "Promedio de notas: " + promedio.toFixed(2);

}