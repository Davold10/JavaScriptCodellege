//CASHDOM
let InputWord = document.getElementById('InputWord');
let btnReverse = document.getElementById('btnReverse');

//LISTENERS
InputWord.addEventListener('change', AddWord);
btnReverse.addEventListener('click', Reverse);

//GLOBAL-VARIBALES
let Words = [];
let list = "";
//FUNCTIONS
function AddWord(){
   Words.push(InputWord.value);
   InputWord.value = ''
}
function Reverse(){
    Words.reverse();
    Words.forEach(CreateList);
}
function CreateList(item){
    list += `<li  class="list-group-item mt-1">${item} </li>`
    Swal.fire({
        type: 'success',
        title: 'Sus palabras en lista al revez son:',
        html: `<ul class="list-group">${list}</ul>`,
        footer: '<a href>Developed by DavidRomero</a>'
    })
}