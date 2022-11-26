export default class Modal {

  // argumentos
  constructor(openButton, closeButton, modalContainer) {
    // selecionando o botão de abrir o modal
    this.openButton = document.querySelector(openButton);

    // selecionando o botão de fechar o modal
    this.closeButton = document.querySelector(closeButton);

    // selecionando o container do modal
    this.modalContainer = document.querySelector(modalContainer);

    // faz referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outModal = this.outModal.bind(this);
  }

  // método de 'click' sobre o botão de Login, abre o modal, sobre o botão de fechar, fecha o modal
  toggleModal() {
    this.modalContainer.classList.toggle('active');
  }

  // evento em si
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // método de fechar o modal ao clicar fora dele
  outModal(event) {
    if(event.target === this.modalContainer) { // verifica se o clique foi no container ou no modal
      this.toggleModal();
    }
  }

  // adiciona os eventos ao modal
  addModalEvents() {
    // adiconando eventos de 'click', abrir, fechar e clique fora do modal(2)
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outModal);
  }

  init() {
    // TESTE
    // Se os seletores existirem, o código vai funcionar
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }    
}