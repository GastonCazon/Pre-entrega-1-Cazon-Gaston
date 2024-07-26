const capital = prompt("Ingrese su capital"); // Monto del préstamo
const intereses = prompt("Intereses a pagar"); // Tasa de interés anual en porcentaje
const años = prompt("Tiempo de pago"); // Plazo del préstamo en años

//funcion de calculo de prestamo
function calculateLoan(capital, intereses, años) {
    const interesesMes = intereses / 100 / 12;
    const numeroDePago = años * 12;
    const x = Math.pow(1 + interesesMes, numeroDePago);
    const mesPago = (capital * x * interesesMes) / (x - 1);

    if (!isNaN(mesPago) && (mesPago !== Infinity) && (mesPago > 0)) {
        console.log(`Monto del préstamo: $${capital}`);
        console.log(`Tasa de interés anual: ${intereses}%`);
        console.log(`Plazo del préstamo: ${años} año`);
        console.log(`Pago mensual: $${mesPago.toFixed(2)}`);
    } else {
        console.log('Por favor, ingrese valores válidos.');
    }
}

calculateLoan(capital, intereses, años);