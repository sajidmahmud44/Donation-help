document.getElementById('btn-add-money3').addEventListener('click', function(event){
    event.preventDefault();
    const addmoney3 = getinputfieldvaluebyid('input-add-money3');
    const accountbalance = gettextfieldvaluebyid('account-balance');
    
    if(addmoney3 > 0 && addmoney3 < accountbalance ){
       const balance3 = gettextfieldvaluebyid('balance-3');
      const newbalance3 = addmoney3 + balance3;
    
    document.getElementById('balance-3').innerText = newbalance3;
    const newaccountbalance3 = accountbalance - addmoney3;
    
    document.getElementById('account-balance').innerText = newaccountbalance3;
    // add to history
    const d = new Date();
    const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('mx-auto');
    div.classList.add('max-w-5xl');
    div.classList.add('p-6');
    div.classList.add('rounded-xl');
    div.classList.add('mt-8');
    
    
      
    div.innerHTML = `<p class="font-bold text-xl">${addmoney3} Taka is Donated for Aid for Injured in the Quota Movement</p>
    <p>${d}</p>
    
    `
    
    
    document.getElementById('history-form').appendChild(div);
    
    const modal = document.getElementById('data-menu-3');
modal.showModal()

    }
    else{
       alert('failed to end the money')
       
    }
      
    });