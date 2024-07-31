function simuladorPrestamos() {
    console.log("Bienvenido al simulador de préstamos");

    let repetir = true;

    while (repetir) {
        let capital = prompt("Ingrese el monto del préstamo que desea solicitar:");
        capital = parseFloat(capital);
        if (isNaN(capital) || capital <= 0) {
            console.log("Por favor, ingrese un monto válido.");
            continue;
        }

        let intereses = prompt("Ingrese la tasa de interés anual (en porcentaje):");
        intereses = parseFloat(intereses);
        if (isNaN(intereses) || intereses <= 0) {
            console.log("Por favor, ingrese una tasa de interés válida.");
            continue;
        }

        let plazo = prompt("Ingrese el plazo del préstamo en años:");
        plazo = parseInt(plazo);
        if (isNaN(plazo) || plazo <= 0) {
            console.log("Por favor, ingrese un plazo válido.");
            continue;
        }

        function calculateLoan(capital, intereses, plazo) {
            const interesesMes = intereses / 100 / 12;
            const numeroDePago = plazo * 12;
            const x = Math.pow(1 + interesesMes, numeroDePago);
            const mesPago = (capital * x * interesesMes) / (x - 1);
        
            if (!isNaN(mesPago) && (mesPago !== Infinity) && (mesPago > 0)) {
                console.log(`Monto del préstamo: $${capital}`);
                console.log(`Tasa de interés anual: ${intereses}%`);
                console.log(`Plazo del préstamo: ${plazo} año`);
                console.log(`Pago mensual: $${mesPago.toFixed(2)}`);
            } else {
                console.log('Por favor, ingrese valores válidos.');
            }
        }
        
        calculateLoan(capital, intereses, plazo);

        repetir = false;

        console.log("Gracias por usar el simulador de préstamos. ¡Hasta luego!");
    }
}

simuladorPrestamos();