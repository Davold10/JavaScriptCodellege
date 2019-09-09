//CASHDOM
let hours = document.getElementById('hours');
let result = document.getElementById('result');

//LISTENERS
hours.addEventListener('keypress', total)

//FUNCTIONS
function total(){
    if(event.key == 'Enter'){
        let hrs = Math.ceil(hours.value);
        let total =0;
        if (hrs == 0){
            result.innerHTML = `<h4 class="alert-heading"> Ingrese una cantidad valida</h4>`
            return
        }
        if(hrs<=2 && hrs>0){
            total = hrs*5
            result.innerHTML = `<h4 class="alert-heading"> Su total es: $${total}</h4>`
            return;
        } 
        if(hrs<=5){
            total = 10 + (hrs-2)*4
            result.innerHTML = `<h4 class="alert-heading"> Su total es: $${total}</h4>`
            return;
        } 
        if(hrs<=10){
            total = 22 + (hrs-5)*3
            result.innerHTML = `<h4 class="alert-heading"> Su total es: $${total}</h4>`
            return;
        } 
        if(hrs>10){
            total = 37 + (hrs-10)*2
            result.innerHTML = `<h4 class="alert-heading"> Su total es: $${total}</h4>`
            return;
        } 
        
    }
}
