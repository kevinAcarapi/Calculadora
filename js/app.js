var pantalla = document.getElementsByClassName("pantalla"); //no te deja iterar con el forEach ->HTMLcollection

const teclas = document.getElementsByName("tecla"); // si te permite iterar, -> NODElist

const operadores = document.getElementsByName("operador");
const igual = document.getElementsByName("igual");
const borrar = document.getElementsByName("borrar");

var operandoActual = "";
var operador = "";
var operandoAnterior = "";

var resultado = "";



teclas.forEach(function(tecla) { // obtengo cada elemnto del array
    tecla.addEventListener("click", function() { // al hacer click en ese elemento se me activará el evento y se ejecutrá lo que esta dentro de la función
        operandoActual += tecla.innerText;
        pantalla[0].textContent = operandoActual;


    });
});


operadores.forEach(function(operando){
    operando.addEventListener("click", function() {

        operador = operando.innerText; // Captura el operador para luego usarlo unicamente en el swicht

        operandoAnterior = operandoActual;

        operandoActual = "";

    })
});



signo = igual[0]

signo.addEventListener("click", function() {
    switch (operador) {
        case "+":
            resultado =  parseFloat(operandoAnterior) + parseFloat( operandoActual);
            console.log(resultado)
            break;
    
        case "-":
            resultado =  parseFloat(operandoAnterior) - parseFloat(operandoActual);
            console.log(resultado)
            break;
        
        case "*":
            resultado =  parseFloat(operandoAnterior) * parseFloat(operandoActual);
            console.log(resultado)
            break;
    
        case "/":
            resultado =  parseFloat(operandoAnterior) / parseFloat(operandoActual);
            console.log(resultado)
            break;
    
        default:
            break;
        
    }
    
    pantalla[0].textContent = resultado;

    operandoActual = resultado;


    operandoAnterior = "";
    
})


borrar.forEach(function(eliminar) {
    eliminar.addEventListener("click", function () {
        pantalla[0].textContent = "";
        resultado = "";

        operandoActual = "";

        operandoAnterior = "";
    });
});




