window.onload = function() {
    document.querySelectorAll('a:not(header a):not(.dimen a):not(.voltar a):not(.indice a)').forEach(link => {
      link.setAttribute('target', '_blank');      
      link.setAttribute('rel', 'noopener noreferrer'); 
    });
    };

let b=document.getElementById("bloco"),x=0,y=40,mx=0,my=0;
document.onmousemove=e=>{mx=e.clientX; my=e.clientY;}
(function m(){x+=(mx-x)*0.008;
   y+=(my-y)*0.01; 
   b.style.left=x+'px';
   b.style.top=y+'px'; 
   requestAnimationFrame(m);})();

const bloco = document.getElementById("bloco");
    const som = document.getElementById("som");

    bloco.addEventListener("mouseenter", () => {
      som.currentTime = 0;
      som.play();
    });