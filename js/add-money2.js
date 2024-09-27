document.getElementById('btn-add-money2').addEventListener('click', function(event){
    event.preventDefault();
    const addmoney2 = getinputfieldvaluebyid('input-add-money2');
    const accountbalance = gettextfieldvaluebyid('account-balance');
    
    if(addmoney2 > 0 && addmoney2 < accountbalance ){
       const balance2 = gettextfieldvaluebyid('balance-2');
      const newbalance2 = addmoney2 + balance2;
    
    document.getElementById('balance-2').innerText = newbalance2;
    const newaccountbalance2 = accountbalance - addmoney2;
    
    document.getElementById('account-balance').innerText = newaccountbalance2;

    // add to history
    const d = new Date();
    const div = document.createElement('div');
div.classList.add('border');
div.classList.add('mx-auto');
div.classList.add('max-w-5xl');
div.classList.add('p-6');
div.classList.add('rounded-xl');
div.classList.add('mt-8');


  
div.innerHTML = `<p class="font-bold text-xl">${addmoney2} Taka is Donated for Donate for Flood Relief in Feni,Bangladesh</p>

<p>${d}</p>
`


document.getElementById('history-form').appendChild(div);

const modal = document.getElementById('data-menu-2');
modal.showModal()
    
    }
    else{
       alert('failed to end the money')
       
    }
      
    });