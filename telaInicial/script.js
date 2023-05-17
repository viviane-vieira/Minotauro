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
