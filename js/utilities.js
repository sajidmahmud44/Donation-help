// common function
const showdonation = document.getElementById('add-money-form');
const showtransaction = document.getElementById('history-form');


function getinputfieldvaluebyid(id){

    const inputvalue = document.getElementById(id).value;
    inputnumber = parseFloat(inputvalue);
    return inputnumber;
}

function gettextfieldvaluebyid(id){
    const textvalue = document.getElementById(id).innerText;
    const textnumber = parseFloat(textvalue);
    return textnumber;
}

const Donationbd = document.getElementById('show-donation');
const Historybd = document.getElementById('transaction');

document.getElementById('transaction').addEventListener('click', function(){
    Historybd.classList.add('bg-[#B4F461]');
    Historybd.classList.remove('bg-white');
    Donationbd.classList.add('bg-white');
    Donationbd.classList.remove('bg-[#B4F461]');

    showtransaction.classList.remove('hidden');
    showdonation.classList.add('hidden');
    
});

document.getElementById('show-donation').addEventListener('click', function(){
    Donationbd.classList.remove('bg-white');
    Donationbd.classList.add('bg-[#B4F461]');
    Historybd.classList.remove('bg-[#B4F461]');
    Historybd.classList.add('bg-white');

    showtransaction.classList.add('hidden');
    showdonation.classList.remove('hidden');
    
});

