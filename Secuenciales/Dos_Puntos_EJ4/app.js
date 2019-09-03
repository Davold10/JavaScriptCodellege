//CASHDOM
let button = document.getElementById('button');
let x1 = document.getElementById('x1');
let x2 = document.getElementById('x2');
let y1 = document.getElementById('y1');
let y2 = document.getElementById('y2');
let dis = 0;

//LISTENERS
button.addEventListener('click', Distance);

//FUNCTIONS
function Distance(){
   dis = Math.sqrt(Math.pow((x2.value-x1.value),2)+Math.pow((y2.value-y1.value),2));
   console.log(dis +"wtf");
   document.getElementById('result').innerHTML = dis.toFixed(2);
}