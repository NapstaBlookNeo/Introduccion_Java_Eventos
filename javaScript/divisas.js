//Convertir de Pesos a Dolares
let pesos = document.getElementById('pesos')
pesos.addEventListener('keyup', pesosDolares)

function pesosDolares() {
    let pesos = document.getElementById('pesos').value
    let conversion = document.getElementById('dolares')
    conversion.value = (pesos / 4050).toFixed(2);
}

//Convertir de Dolares a Pesos
let dolares = document.getElementById('dolares')
dolares.addEventListener('keyup', dolaresPesos)

function dolaresPesos() {
    let dolares = document.getElementById('dolares').value
    let conversion = document.getElementById('pesos')
    conversion.value = dolares * 4050;
    console.log(conversion.value);
}