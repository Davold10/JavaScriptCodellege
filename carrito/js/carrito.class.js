class Carrito {

    constructor() {
        this.LS = new LocalStorage();
    }

    readDataCourse(curso, listaCursos) {

        const dataCourse = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute("data-id")
        }


        this.addCourseCar(dataCourse, listaCursos);
    }

    addCourseCar(dataCourse, listaCursos) {
        const row = document.createElement('tr');

        row.innerHTML = `<td>
        <img src="${dataCourse.imagen}" width=100>
        </td>
        <td>${dataCourse.titulo}</td>
        <td>${dataCourse.precio}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</a>
        </td>
        `
        listaCursos.appendChild(row);

        this.LS.SaveCourseLocalStorage(dataCourse);
    }

    EliminarCursoCarrito(event) {

        console.log(event);

        event.preventDefault();

        let curso, cursoId;

        if (event.target.classList.contains('borrar-curso')) {

            curso = event.target.parentElement.parentElement;
            console.log(curso);
            cursoId = curso.querySelector('a').getAttribute('data-id')
            curso.remove();
            this.LS.eliminarCursoLS(cursoId);
        }
    }

    ShowCoursesLSCar() {

        let CoursesLS = this.LS.getCoursesLocalStorage();
        
        CoursesLS.forEach(function (curso) {

            const row = document.createElement('tr');
            row.innerHTML = `<td>
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

    vaciarCarrito(listaCursos){
        listaCursos.innerHTML = '';

        while(listaCursos.firstChild){
            listaCursos.removeChild(listaCursos.firstChild)
        }
        this.LS.vaciarLocalStorage();
    }
}