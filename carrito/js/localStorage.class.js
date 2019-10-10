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
}