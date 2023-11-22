let calcular = document.getElementById('calcular')
calcular.addEventListener('click', calcularMasa)

function calcularMasa() { 
    let estatura = document.getElementById('estatura').value
    estatura /= 100;
    let peso = document.getElementById('peso').value
    imc = peso / estatura ** 2;
    let resultado = document.getElementById('resultado');
    resultado.placeholder ="Índice de masa Corporal: " + imc.toFixed(0);
}


