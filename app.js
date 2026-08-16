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

  function agendarc(){
    const nome = document.getElementById("nome").value;
    const tel = document.getElementById("tel").value;
    const nasc = document.getElementById("nasc").value;
    const dt = document.getElementById("dt").value;
    const hr = document.getElementById("hr").value;
    const obs = document.getElementById("obs").value;
    
    const areas = document.getElementsByName("area");
    const valorarea = [];

    for(let area of areas){
      if(area.checked){
        valorarea.push(area.value);
      }
    }

    const pt = document.querySelectorAll(" #pt input");
   const valorpt = [];

   for(let input of pt ){
    valorpt.push(input.value);
    
   }
  
   const resumo = document.getElementById("resumo");

   resumo.innerHTML= `
         <h2>Resumo do agendamento</h2> 
         <p>Nome: ${nome}</p>
         <p>Telefone: ${tel}</p>
         <p>Nascimento: ${nasc}</p>
         <h2>Pergunta(s):</h2>
         <p class="pt">${valorpt.join("<br>")}</p>
         <h2>Área(s) escolhida(s):</h2>
         <p> ${valorarea.join(" <br> ")}</p>
         <h2>Horários:</h2>
         <p>Data: ${dt}</p>
         <p>Horário: ${hr}</p>
         <h5>Observação: ${obs}</h5>

         <button id="voltar">Voltar e Editar</button>
        <button id="enviar">Confirmar e Enviar</button> 
         
      ` ; 
       const modalResumo = document.getElementById("resumo");
  modalResumo.style.display="flex";
  
  const overlayResumo = document.getElementById("overlayResumo");
  overlayResumo.style.display="flex";


      const voltar = document.getElementById("voltar");
      voltar.onclick = function(){
        modalResumo.style.display="none";
        overlayResumo.style.display="none";
           
        }
        const enviar = document.getElementById("enviar");
        enviar.onclick= function(){

          const msg = ` Olá gostaria de confirmar meu agendamento.

          Nome: ${nome}
          Telefone: ${tel}
          Nascimento: ${nasc}

          Pergunta(s):
          ${valorpt.join("\n")}

          Área(s) escolhida(s):
          ${valorarea.join("\n")}

          Data:${dt}
          Horário:${hr}
          Observação:${obs}
          `;

          const numero ="5521996669067";
          const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
          window.open(url, "_blank");
        }
      }

 
  

