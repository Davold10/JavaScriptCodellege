//CASHDOM
let SavingsBtn = document.getElementById('SavingsBtn');

//LISTENERS
SavingsBtn.addEventListener('click',List);

//FUNCTIONS
async function List(){
    let totalsavings = 0;
    let daylysavings = 0;
    let id;
    for(let x=1; x<=365;x++){
        if(x<=73){
            daylysavings += 0.03;
           daylysavings=Number( daylysavings.toFixed(2));
            totalsavings += daylysavings;
           totalsavings= Number(totalsavings.toFixed(2));
            id = 'PartI';
          await  stop(x,id,totalsavings);
        } else if(x<=146){
            daylysavings += 0.03;
           daylysavings=Number( daylysavings.toFixed(2));
            totalsavings += daylysavings;
           totalsavings= Number(totalsavings.toFixed(2));
            id = 'PartII';
          await  stop(x,id,totalsavings);          
        }else if(x<=219){
            daylysavings += 0.03;
            daylysavings=Number( daylysavings.toFixed(2));
             totalsavings += daylysavings;
            totalsavings= Number(totalsavings.toFixed(2));
            id = 'PartIII';
          await  stop(x,id,totalsavings);
        } else if(x<=292){
            daylysavings += 0.03;
           daylysavings=Number( daylysavings.toFixed(2));
            totalsavings += daylysavings;
           totalsavings= Number(totalsavings.toFixed(2));
            id = 'PartIV';
          await  stop(x,id,totalsavings);
        } else{
            daylysavings += 0.03;
           daylysavings=Number( daylysavings.toFixed(2));
            totalsavings += daylysavings;
           totalsavings= Number(totalsavings.toFixed(2));
            id = 'PartV';
          await  stop(x,id,totalsavings);
        }
    }
}

function stop(x,id,totalsavings){

    return new Promise( (res,rej)=>{


        setTimeout(() => {

            res(createList(x,id,totalsavings))
            
        }, 200);


    } )



}

function createList(x,id,totalsavings){

        let Ul = document.createElement('ul');
        Ul.setAttribute('class','list-group list-group-flush');
        
        let Li = document.createElement('li');
        Li.setAttribute('class','list-group-item');
        Li.appendChild(document.createTextNode(`Ahorro en dia ${x} = ${totalsavings} `));
    
        let Part = document.getElementById(id);
        Part.appendChild(Ul);
        Ul.appendChild(Li);

}