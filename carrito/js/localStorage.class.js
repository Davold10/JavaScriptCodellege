class LocalStorage {
    constructor(){}

    SaveCourseLocalStorage(curso){
        let ArrayCourses = [];
        ArrayCourses = this.getCoursesLocalStorage();
        ArrayCourses.push(curso);

        localStorage.setItem('courses', JSON.stringify(ArrayCourses));
    }

    getCoursesLocalStorage(){
        let cursosLS;
        if (localStorage.getItem('courses')===null){
            cursosLS = []
        }else{
            cursosLS = JSON.parse(localStorage.getItem('courses'))   
        }
        return cursosLS
    }

    eliminarCursoLS(curso){
        let cursosLS;
        
        cursosLS = this.getCoursesLocalStorage();

        cursosLS.forEach(function (cursoLS, index){
            if(cursoLS.id===curso){
                cursosLS.splice(index,1)
            }
        })

        localStorage.setItem('courses', JSON.stringify(cursosLS))
    }

    vaciarLocalStorage(){
        localStorage.clear();
    }
}