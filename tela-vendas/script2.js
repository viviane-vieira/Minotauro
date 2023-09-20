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