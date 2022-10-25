//seleciona as classes tabMenu e tabContent da lista de animais e sections da lista de descrições(1)
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

//TESTE
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