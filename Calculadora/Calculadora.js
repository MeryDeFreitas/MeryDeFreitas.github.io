function limpiar(){
    document.getElementById('miFormulario').reset() 
}

function sumar(){
    var valor1 = parseInt(document.getElementById('valor1').value) //El value hace que lo lea como numero
    var valor2 = parseInt(document.getElementById('valor2').value)

    document.getElementById('resultado').innerHTML = valor1+valor2
}

function restar(){
    var valor1 = parseInt(document.getElementById('valor1').value) 
    var valor2 = parseInt(document.getElementById('valor2').value)

    document.getElementById('resultado').innerHTML = valor1-valor2
}

function multiplicar(){
    var valor1 = parseInt(document.getElementById('valor1').value) 
    var valor2 = parseInt(document.getElementById('valor2').value)

    document.getElementById('resultado').innerHTML = valor1*valor2
}

function dividir(){
    var valor1 = parseInt(document.getElementById('valor1').value) 
    var valor2 = parseInt(document.getElementById('valor2').value)

    document.getElementById('resultado').innerHTML = valor1/valor2
}