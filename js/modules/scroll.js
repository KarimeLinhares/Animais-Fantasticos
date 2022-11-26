// classe do scroll suave
export default class Scroll {

  // argumentos
  constructor(links, options) {
    // seleciona todos os links internos(1)
    this.innerLinks = document.querySelectorAll(links);
    
    // opções do scroll
    if(options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start'
      }
    } else {
      this.options = options;
    }

    // define o 'this' da função
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // método que linka o item do navegador com a sua seção
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href'); // pega o atributo do href
    const section = document.querySelector(href);

    // faz o movimento de scroll do item para a seção
    section.scrollIntoView(this.options);
  }

  // loop que adiciona para cada link um evento de 'click'
  addLinkEvent() {
    this.innerLinks.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {

    // verifica se existe algo no 'link'
    if(this.innerLinks.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
