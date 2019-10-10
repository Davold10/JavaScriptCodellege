const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos =  document.querySelector('#lista-carrito tbody');

eventListener();
ShowCoursesLSCar();

function eventListener(){
    cursos.addEventListener('click', GetCourse)
}

function ShowCoursesLSCar(){
    let LS = new LocalStorage();

   let CoursesLS =  LS.getCoursesLocalStorage();

   CoursesLS.forEach(function(curso){
       const row = document.createElement('tr');
       row.innerHTML =   `<td>
       <img src="${curso.imagen}" width=100>
       </td>
       <td>${curso.titulo}</td>
       <td>${curso.precio}</td>
       <td>
       <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
       </td>
       `
       listaCursos.appendChild(row);
   })
}

function GetCourse(event) {

    event.preventDefault();

    if (event.target.classList.contains('agregar-carrito')){
        let Course = event.target.parentElement.parentElement;
        
        let objetCard =  new Carrito();
        objetCard.readDataCourse(Course, listaCursos);
    }
}