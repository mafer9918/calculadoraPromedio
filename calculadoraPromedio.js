{
    var nomEstudiante = prompt("Ingresar nombre estudiante");
    let num1;
    let num2;
    let num3;
    let promedio;

    validarLetras();
    pedirNotas();
    calcularPromedio();

    function calcularPromedio() {
        if ((num1 >= 0 && num1 <= 10) && (num2 >= 0 && num2 <= 10) && (num3 >= 0 && num3 <= 10)) {
            promedio = (num1 + num2 + num3) / 3;
            if (promedio >= 7) {
                alert(nomEstudiante + ", ¡felicidades! Has aprobado con un promedio de " + promedio.toFixed(2));
            } else {
                alert(nomEstudiante + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + promedio.toFixed(2));
            }
        } else {
            alert("Error: El rango debe estar entre 0 y 10");
            pedirNotas();
            calcularPromedio();
        }
    }

    function pedirNotas() {
        alert("Ingresar las notas a promediar");
        num1 = parseFloat(prompt("Ingresar la primera nota"));
        num2 = parseFloat(prompt("Ingresar la segunda nota"));
        num3 = parseFloat(prompt("Ingresar la tercera nota"));

        if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Error: Ingresar sólo números");
            pedirNotas();
        }
    }

    function validarLetras() {
        while (!/^[a-zA-Z]+$/.test(nomEstudiante)) {
            alert("¡Ingresar sólo letras!");
            nomEstudiante = prompt("Ingresar nombre estudiante");
        }
    }
}