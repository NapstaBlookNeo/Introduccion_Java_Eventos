let notas = [
    {
        id: 1,
        titulo: 'Organizar armario',
        descripcion: 'Clasificar la ropa por categorías (camisetas, pantalones, vestidos, etc.) y decidir qué prendas donar, tirar o conservar.',
        realizada: false
    },
    {
        id: 2,
        titulo: 'Programar una Cita',
        descripcion: 'Hacer una llamada al consultorio del doctor Martínez para agendar una cita médica para el chequeo anual.',
        realizada: false
    },
    {
        id: 3,
        titulo: 'Estudiar para exámenes',
        descripcion: 'Resolver ejercicios y problemas relacionados con cada materia. Repasar apuntes y materiales del curso para comprender mejor los conceptos. ',
        realizada: false
    },
]

let idGlobal = 4

//pintar notas
let tarjetas = document.getElementById("tarjetasNotas")
document.addEventListener('DOMContentLoaded', pintarNotas(notas))
function pintarNotas(notas) {
    tarjetas.innerHTML = ''
    if (notas.length == 0) {
        let card = document.createElement("div")
        card.classList.add("col-12")
        card.innerHTML =
                '<h2 class = "text-center text-secondary my-5">No hay elementos para mostrar</h2>'
        tarjetas.appendChild(card)
    } else {
        for (let i = 0; i < notas.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card", "col-md-4", "col-lg-3", "my-4", "mx-md-5", "mx-lg-4", "p-0")
            card.innerHTML =
                `<div class="card-header d-flex justify-content-between bg-dark-subtle align-items-center w-100" >
        <input class="form-check-input" type="checkbox" value="" id="checkNota">
        <h5 class="m-2">${notas[i].titulo}</h5>
        <a class="bi bi-trash3 text-danger clickeable" onClick = "eliminarNota(${notas[i].id})"></a>
    </div>
    <div class="card-body">
        <p class="card-text">
            ${notas[i].descripcion}
        </p>
    </div>`
            tarjetas.appendChild(card)
        }
    }
}

//Crear nueva Nota

let guardar = document.getElementById('guardar')
guardar.addEventListener('click', crearNota)

function crearNota() {
    let titulo = document.getElementById('tituloNota').value
    let descripcion = document.getElementById('textoNota').value
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        descripcion: descripcion,
        realizada: false
    }

    idGlobal++
    notas.push(nuevaNota)
    pintarNotas(notas)
}

function eliminarNota(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id == id) {
            notas.splice(i, 1);
        }
    }
    pintarNotas(notas)
}
