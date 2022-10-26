// função de navegação da lista de animais
function initTabNav() {
  //seleciona as classes tabMenu e tabContent da lista de animais e sections da lista de descrições(1)
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  //TESTE(5)
  //se houver itens na tabMenu e/ou tabContent o código vai acontecer
  if(tabMenu.length && tabContent.length) {

    // faz com que o primeiro item da section sempre fique ativa ao iniciar a página, monstrando assim seu conteúdo mesmo não tendo sido clicado(4)
    tabContent[0].classList.add('active');

    //função que ativa e desativa as sections, adicionando e removendo a classe 'active'(2)
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active');
      });
      tabContent[index].classList.add('active');
    }

    //loop em que, para cada item da lista de animais, ao acontecer o evento de 'click', será adicionado a class 'active' a cada um dos itens que forem ativados(3)
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();


// função da lista do FAQ
function initAccordion() {
  //seleciona os tópicos do FAQ(1)
  const accordionList = document.querySelectorAll('.js-accordion dt');
  //constante de ativação
  const activeClass = 'active';

  // TESTE(5)
  // Se houver itens no 'accordionList' a função será ativada
  if(accordionList.length) {
    //faz com que o primeiro tópico e descrição já fique ativo ao iniciar o código(4)
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    //função que adiciona a classe 'active' aos tópicos e descrições no evento de 'click'(3)
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    //adiciona evento de 'click',(2)
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();


//função do scroll suave
function initScroll() {
  //seleciona todos os links internos(1)
  const innerLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  //função que linka o item do navegador com a sua seção(3)
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href'); //pega o atributo do href
    const section = document.querySelector(href);
    
    //faz o movimento de scroll do item para a seção(4)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  //loop que adiciona para cada link um evento de 'click'(2)
  innerLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScroll();
