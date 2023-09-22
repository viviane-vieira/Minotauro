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
// Selecionar elementos HTMLda modal cadastro
const abrirModalBtn = document.getElementById("abrirModal");
const modalCadastro = document.getElementById("modalCadastro");
const fecharModalBtn = document.getElementById("fecharModal");

// Função para abrir o modal
function abrirModal() {
    modalCadastro.style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    modalCadastro.style.display = "none";
}

// Event listeners
abrirModalBtn.addEventListener("click", abrirModal);
fecharModalBtn.addEventListener("click", fecharModal);

// Fechar o modal quando clicar fora dele
window.addEventListener("click", function (event) {
    if (event.target == modalCadastro) {
        fecharModal();
    }
});

//modal login
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("loginModal");
const closeModalBtn = document.querySelector(".close");

// Abre o modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fecha o modal ao clicar no botão Fechar ou fora do modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Evita o fechamento do modal quando se clica dentro dele
modal.addEventListener("click", (event) => {
    event.stopPropagation();
});