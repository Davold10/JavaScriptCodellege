class Carrito {

    constructor(){
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

    eliminarCursoLS(curso){
        let cursosLS;
        cursosLS = this.LS.getCoursesLocalStorage();

        cursosLS.forEach(function (cursoLS, index){
            if(cursoLS.id===curso){
                cursosLS.splice(index,1)
            }
        })
    }
}