export default class TabNav {

  // argumentos
  constructor(menu, content) {

  // seleciona as classes tabMenu e tabContent da lista de animais e sections da lista de descrições(1)
  this.tabMenu = document.querySelectorAll(menu);
  this.tabContent = document.querySelectorAll(content);

  // classe de ativação
  this.activeClass = 'active';
  }

  // método que ativa e desativa as sections, adicionando e removendo a classe 'active'(2)
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // adiciona os eventos ao TabNav
  addTabNavEvent() {
    // loop em que, para cada item da lista de animais, ao acontecer o evento de 'click', será adicionado a class 'active' a cada um dos itens que forem ativados(3)
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    // TESTE(5)
    // se houver itens na tabMenu e/ou tabContent o código vai acontecer
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabNavEvent();
      // faz com que o primeiro item da section sempre fique ativa ao iniciar a página, monstrando assim seu conteúdo mesmo não tendo sido clicado(4)
      this.activeTab(0);
    }
  }  
}
