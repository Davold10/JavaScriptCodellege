//CASHDOM
let price = document.getElementById('price');
let discount = document.getElementById('discount');
let total = document.getElementById('total');

//LISTENERS
price.addEventListener('keypress', Discount)
//FUNCTIONS
function Discount() {
    if (event.key == 'Enter' && price.value>0) {
        if (price.value > 3600) {
            discount.innerHTML = ` <h4 class="alert-heading"> 16% </h4>`;
            total.innerHTML =  ` <h4 class="alert-heading"> $  ${price.value * .84} </h4>`
            return;
        }
        discount.innerHTML = ` <h4 class="alert-heading"> 7% </h4>`;
            total.innerHTML =  ` <h4 class="alert-heading"> $  ${price.value * .93} </h4>`
    }
}