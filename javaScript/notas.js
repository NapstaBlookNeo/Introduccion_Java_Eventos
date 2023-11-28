let notas = [
    {
        id: 1,
        titulo: 'Organizar armario',
        descripcion: 'Clasificar la ropa por categorías (camisetas, pantalones, vestidos, etc.) y decidir qué prendas donar, tirar o conservar.',
        realizada: true
    },
    {
        id: 2,
        titulo: 'Programar una Cita',
        descripcion: 'Hacer una llamada al consultorio del doctor Martínez para agendar una cita médica para el chequeo anual.',
        realizada: true
    },
    {
        id: 3,
        titulo: 'Estudiar para exámenes',
        descripcion: 'Resolver ejercicios y problemas relacionados con cada materia. Repasar apuntes y materiales del curso para comprender mejor los conceptos. ',
        realizada: false
    },
    {
        id: 4,
        titulo: 'Hacer ejercicio',
        descripcion: 'Realizar una sesión de ejercicio cardiovascular y estiramientos durante al menos 30 minutos.',
        realizada: true
    },
    {
        id: 5,
        titulo: 'Comprar comestibles',
        descripcion: 'Hacer la lista de los alimentos necesarios y dirigirse al supermercado para comprar lo necesario para la semana.',
        realizada: false
    },
    {
        id: 6,
        titulo: 'Llamar a mamá',
        descripcion: 'Realizar una llamada a mamá para saludarla y preguntarle cómo ha estado.',
        realizada: false
    },
    {
        id: 7,
        titulo: 'Preparar presentación',
        descripcion: 'Elaborar diapositivas y material necesario para la presentación en la reunión del trabajo.',
        realizada: false
    }
]

let switchNotasRealizadas = false
let idGlobal = notas.length + 1

//pintar notas
let tarjetas = document.getElementById("tarjetasNotas")
document.addEventListener('DOMContentLoaded', pintarNotas(notas))

function pintarNotas(notas) {
    tarjetas.innerHTML = ''

    let notasAMostrar = switchNotasRealizadas ? notas.filter(nota => nota.realizada) : notas;
    console.log(notasAMostrar);
    if (notasAMostrar.length === 0) {
        let element = document.createElement("div");
        element.classList.add("col-12", "min-vh-50");
        element.innerHTML = '<h2 class="text-center text-secondary my-5">No hay elementos para mostrar</h2>';
        tarjetas.appendChild(element);
    } else {
        for (let i = 0; i < notasAMostrar.length; i++) {
            let card = document.createElement("div");
            card.classList.add("card", "col-md-4", "col-lg-3", "my-4", "mx-md-5", "mx-lg-4", "p-0");
            let descripcionTachada = notasAMostrar[i].realizada ? 'text-decoration-line-through' : '';
            card.innerHTML = `
                <div class="card-header d-flex justify-content-between bg-dark-subtle align-items-center w-100" data-id="${notasAMostrar[i].id}">
                    <input onClick="marcarRealizada(${notasAMostrar[i].id})" type="checkbox" ${notasAMostrar[i].realizada ? "checked" : ""}>
                    </input>
                    <h5 class="m-2">${notasAMostrar[i].titulo}</h5>
                    <a class="bi bi-trash3 text-danger clickeable" onClick="eliminarNota(${notasAMostrar[i].id})"></a>
                </div>
                <div class="card-body">
                    <p class="card-text ${descripcionTachada}">${notasAMostrar[i].descripcion}</p>
                </div>`;
            tarjetas.appendChild(card);
        }
    }
}


//Crear nueva Nota
let guardar = document.getElementById('guardar');
guardar.addEventListener('click', () => {
    let titulo = document.getElementById('tituloNota').value.trim();
    let descripcion = document.getElementById('textoNota').value.trim();
    funcionBorrarTexto()
    if (titulo !== '' && descripcion !== '') {
        crearNota(titulo, descripcion);
    }
});

function crearNota(titulo, descripcion) {
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        descripcion: descripcion,
        realizada: false
    };

    idGlobal++
    notas.push(nuevaNota)
    funcionBorrarTexto()
    pintarNotas(notas)
}

//Borrar texto de creación de nota
let borrarTexto = document.getElementById('borrar')
borrarTexto.addEventListener('click', funcionBorrarTexto)
function funcionBorrarTexto(){
    let titulo = document.getElementById('tituloNota')
    let descripcion = document.getElementById('textoNota')
    titulo.value = ""
    descripcion.value = ""
}

//Eliminar Nota
function eliminarNota(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id == id) {
            notas.splice(i, 1);
        }
    }
    pintarNotas(notas)
}
//"Realizar" Nota
function marcarRealizada(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id === id) {
            notas[i].realizada = !notas[i].realizada;
            break;
        }
    }
    pintarNotas(notas);
}

//usar filter para filtrar notas con actividades ya hechas
function mostrarRealizadas() {
    switchNotasRealizadas = !switchNotasRealizadas;
    pintarNotas(notas)
}

//Filtrar por busqueda

let textoBusqueda = document.getElementById('textoBusqueda')
textoBusqueda.addEventListener('keyup', busqueda)

function busqueda() {
    let texto = textoBusqueda.value.trim().toLowerCase();
    let notasFiltradas = notas.filter(nota => {
        let titulo = nota.titulo.toLowerCase();
        let descripcion = nota.descripcion.toLowerCase();
        return titulo.includes(texto) || descripcion.includes(texto);
    });
    pintarNotas(notasFiltradas);
}

