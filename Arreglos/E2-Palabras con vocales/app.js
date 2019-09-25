//CASHDOM
let Word = document.getElementById('Word');
let ListWords = document.getElementById('ListWords')
//GLOBAL-VARIABLES
let final = []
let list = ""
//LISTENERS
Word.addEventListener('change', CheckWord);
ListWords.addEventListener('click', ListA)

//FUNCTIOS
function CheckWord() {

    let word = Word.value
    //word = word.replace(/[&\/\\#, +()$~%.'":*?<>{}@0-9!^_|;[]/g, '');
    word = word.replace(/[^A-Za-z]/g, '')
    let str = word.toLowerCase().split('');
    console.log(str);
    if (str[0] == "a") {
        final.push(word)
    }
    console.log(final);
    Word.value = ''
}

function ListA() {
    final.forEach(CreateList)
    Swal.fire({
        type: 'success',
        title: 'Sus palabras que empiezan con a:',
        html: `<ul class="list-group">${list}</ul>`,
        footer: '<a href>Developed by DavidRomero</a>'
    })
}

function CreateList(item) {
    list+=`<li  class="list-group-item mt-1">${item} </li>`
}