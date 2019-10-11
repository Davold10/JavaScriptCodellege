const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos =  document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito')

const objetCar =  new Carrito();

eventListener();


function eventListener(){
    cursos.addEventListener('click', GetCourse);
    carrito.addEventListener('click', deleteCourse);
    document.addEventListener('DOMContentLoaded', ModtrarCursosCarrito);
    vaciarCarrito.addEventListener('click', eliminarCarritoCursos)
    
}

function ModtrarCursosCarrito(){
    objetCar.ShowCoursesLSCar();
}

function deleteCourse(){
    objetCar.EliminarCursoCarrito(event);
    const Toast = Swal.mixin({
        toast: true,
        showConfirmButton: false,
        timer: 3000
      })
      
      Toast.fire({
        type: 'error',
        title: 'Curso eliminado con exito'
      })
}

function eliminarCarritoCursos(){
    objetCar.vaciarCarrito(listaCursos);
}

function GetCourse(event) {

    event.preventDefault();

    if (event.target.classList.contains('agregar-carrito')){
        let Course = event.target.parentElement.parentElement;
        objetCar.readDataCourse(Course, listaCursos);
    }
    Swal.fire({
        type: 'success',
        title: 'Curso agregado con exito',
        showConfirmButton: false,
        timer: 1500
      })
}
