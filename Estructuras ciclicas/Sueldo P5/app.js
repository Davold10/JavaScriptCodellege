//CASHDOM
let sueldoBtn= document.getElementById('sueldoBtn');

//LISTENERS
sueldoBtn.addEventListener('click', Pay);
//FUNCTIONS
function Pay(){
    let hrstotal = 0;
    for(let x=1; x<=6;x++){
        let hrsxday = Number(document.getElementById(`dia${x}`).value);
        hrstotal+=hrsxday;
    }
    let saldo = hrstotal*(document.getElementById('hora').value)

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class','row mt-3');
    
    let DivCol = document.createElement('div');
    DivCol.setAttribute('class','col-12')

    let DivAlert=document.createElement('div');
    DivAlert.setAttribute('class','alert alert-primary');

    let imp = document.getElementById('imp');
    imp.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivAlert);
    DivAlert.innerHTML=`<h4 class="alert-heading"> Su saldo por la semana es: $${saldo} </h4>`

}