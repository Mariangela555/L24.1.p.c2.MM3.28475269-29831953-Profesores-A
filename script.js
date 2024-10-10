// script.js
class Profesor {
    constructor(nombre, bono) {
        this.nombre = nombre;
        this.bono = bono;
    }
}

class ProfesorFijo extends Profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }

    calcularIngreso() {
        return this.bono + this.sueldo;
    }
}

function calcularIngreso() {
    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const bono = parseFloat(document.getElementById("bono").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);

    // Crear un objeto ProfesorFijo
    const profesorFijo = new ProfesorFijo(nombre, bono, sueldo);

    // Calcular el ingreso total
    const ingresoTotal = profesorFijo.calcularIngreso();

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = `Ingreso total del profesor ${nombre}: $${ingresoTotal}`;
}