document.getElementById('btn-add-money1').addEventListener('click', function(event){
event.preventDefault();
const addmoney = getinputfieldvaluebyid('input-add-money');
const accountbalance = gettextfieldvaluebyid('account-balance');

if(addmoney > 0 && addmoney < accountbalance ){
   const balance1 = gettextfieldvaluebyid('balance-1');
  const newbalance = addmoney + balance1;

document.getElementById('balance-1').innerText = newbalance;
const newaccountbalance = accountbalance - addmoney;

document.getElementById('account-balance').innerText = newaccountbalance;

// add to history
const d = new Date();
const div = document.createElement('div');
div.classList.add('border');
div.classList.add('mx-auto');
div.classList.add('max-w-5xl');
div.classList.add('p-6');
div.classList.add('rounded-xl');
div.classList.add('mt-8');



  
div.innerHTML = `<p class="font-bold text-xl">${addmoney} Taka is Donated for Flood at Noakhali, Bangladesh</p>
<p>${d}</p>

`


document.getElementById('history-form').appendChild(div);

const modal = document.getElementById('pop-up-1');
modal.showModal()

}
else{
   alert('failed to send the money')
   
}
  
});