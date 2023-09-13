let header = document.getElementById("header");
let navigationHeader = document.getElementById("navigation_header");
let content = document.getElementById("content") ;
let showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
  if(showSidebar){
    navigationHeader.style.marginLeft='-10vw';
    navigationHeader.style.animationName= 'showSidebar';
   

  }else{
    navigationHeader.style.marginLeft='-100vw';
    navigationHeader.style.animationName='';
  }
 
}

/*ao clicar fora do menu ele irá se fechar sosinho*/
function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}
//modal
document.getElementById("openModalButton").addEventListener("click", function() {
  document.getElementById("myModal1").style.display = "block";
});

// Fecha o modal quando o botão de fechar é clicado
document.getElementsByClassName("close1")[0].addEventListener("click", function() {
  document.getElementById("myModal1").style.display = "none";
});

// Fecha o modal se o usuário clicar fora da área do modal
window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("myModal1")) {
    document.getElementById("myModal1").style.display = "none";
  }
});

/*modal 2*/
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModal = modal.querySelector(".close");
  const registrationForm = document.getElementById("registrationForm");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para processar o formulário de cadastro
    // Por exemplo, enviar os dados para um servidor via AJAX ou executar alguma ação em JavaScript
    modal.style.display = "none"; // Fechar a modal após o envio do formulário
  });
});
/*modal 3*/
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal2");
  const openModalBtn = document.getElementById("openModalBtn2");
  const closeModal = modal.querySelector(".close2");
  const registrationForm = document.getElementById("registrationForm2");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para processar o formulário de cadastro
    // Por exemplo, enviar os dados para um servidor via AJAX ou executar alguma ação em JavaScript
    modal.style.display = "none"; // Fechar a modal após o envio do formulário
  });
});







