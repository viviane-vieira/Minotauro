let header = document.getElementById('header');
let navigationHeader = document.getElementById('navigation_header');
let content = document.getElementById('content');
let showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
   if(showSidebar){
    navigationHeader.style.marginleft = '-10vw';  
    navigationHeader.style.animationName = 'showSidebar';
   }
   else{
    navigationHeader.style.marginleft = '-100vw';
    navigationHeader.style.animationName = '';


   }
}
//Validação formulário

const adressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelector("[data-input]");

const closeButton = document.querySelector("#close-message");

//validar input do CEP
cepInput.addEventListener("keypress",(e) =>{
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);
//permitir apenas numeros
 if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
 }
  
});
//get address envent
cepInput.addEventListener("keyup",(e) => {
   const inputValue = e.target.value; 
   //checar o valor do input
   if(inputValue.length === 8){
    getAndress(inputValue);
   }
});

//Get customer address from API
const getAndress = async (cep) =>{
    console.log(cep);
}


