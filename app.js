const menuBtn = document.getElementById('menu-btn');
const fecharMenu = document.getElementById('fechar-menu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  menu.classList.add('ativo');
  overlay.classList.add('ativo');
  menuBtn.style.display = 'none';       // esconde botão abrir
  fecharMenu.style.display = 'block';   // mostra botão fechar
});

fecharMenu.addEventListener('click', () => {
  menu.classList.remove('ativo');
  overlay.classList.remove('ativo');
  menuBtn.style.display = 'block';      // volta botão abrir
  fecharMenu.style.display = 'none';    // esconde botão fechar
});
const linksMenu= document.querySelectorAll("#menu a");
linksMenu.forEach(link => { 
    link.addEventListener('click' ,() => {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
        menuBtn.style.display='block';
        fecharMenu.style.display="none";

    });
});
 
function agendar(botao){
  
  const modal = document.getElementById("overlay-modal");
  modal.style.display="block";

  const valor = botao.value;
   
   const pt = document.getElementById("pt");
   pt.innerHTML="";
  
  for(let x = 0; x < valor; x++){
 
   const input = document.createElement("input");
   input.placeholder = "Sua Pergunta"; 
   input.style.marginBottom="5px";
   input.style.marginLeft="2px";
   pt.appendChild(input);

  }
}
  const closeModal = document.querySelector(".close-modal");
  const overlayModal = document.getElementById("overlay-modal");

  closeModal.addEventListener("click" , () => {
    overlayModal.style.display = "none";
  })