//função de animação das seções durante o scroll
export default function initAnimeScroll() {
  //seleciona as sections com 'js-scroll'(1)
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  // TESTE(5)
  //se houver itens na sections, o código vai funcionar
  if(sections.length) {

    //calcula o tamanho de 60% da tela
    const halfWindow = window.innerHeight * 0.6;

    //função que dispara o scroll(2)
    function animeScroll() {
      sections.forEach((section) => { 
        const sectionTop = section.getBoundingClientRect().top; //pega a distância do topo de cada elemento
        const isSectionVisible = (sectionTop - halfWindow) < 0; //calcula se a seção está visível na tela do browser, se for true, adiciona a classe 'active', se não, remove a classe 'active'
        if(isSectionVisible) { 
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      })
    }

    //deixa a primeira seção ativada (4)
    animeScroll();

    //adiciona o evento no Scroll(3)
    window.addEventListener('scroll', animeScroll);
  }
}
