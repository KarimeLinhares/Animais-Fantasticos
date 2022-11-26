// função da lista do FAQ
export default class Accordion {

  // argumentos
  constructor(list) {

  // seleciona os tópicos do FAQ
  this.accordionList = document.querySelectorAll(list);

  // constante de ativação
  this.activeClass = 'active';
  }
  
  // função que adiciona a classe 'active' aos tópicos e descrições no evento de 'click'
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona o evento do acordeão
  addAccordionEvent() {
    // adiciona evento de 'click',(2)
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
  // TESTE
  // Se houver itens no 'accordionList' a função será ativada
    if(this.accordionList.length) {
      this.addAccordionEvent();
    // faz com que o primeiro tópico e descrição já fique ativo ao iniciar o código(4)
    this.toggleAccordion(this.accordionList[0]);
    }
    return this;
  }
}
