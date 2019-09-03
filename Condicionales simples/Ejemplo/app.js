//CASHDOM
let button =  document.getElementById('button');
let grade = document.getElementById('grade');
let impresora = document.getElementById('result');

//LISTENERS
button.addEventListener('click', Verificar_Status);

function Verificar_Status(){
    if (Number(grade.value)>8){
        impresora.innerHTML = 'Chicho aprobado';
    }else{
        impresora.innerHTML = 'Chicho reprobado';
        let audio = document.getElementById('AudioDonRamon');
        audio.play();
    }
}