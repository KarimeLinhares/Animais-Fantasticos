export default function initModal() {

  // selecionando o botão de abrir o modal(1)
  const openButton = document.querySelector('[data-modal="open"]');

  // selecionando o botão de fechar o modal(1)
  const closeButton = document.querySelector('[data-modal="close"]');

  // selecionando o container do modal(1)
  const modalContainer = document.querySelector('[data-modal="container"]');

  // evento de 'click' sobre o botão de Login, abre o modal, sobre o botão de fechar, fecha o modal(3)
  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('active');
  }
  // evento de fechar o modal ao clicar fora dele(4)
  function outModal(event) {
    if(event.target === this) { // verifica se o clique foi no container ou no modal
      toggleModal(event);
    }
  }
    
    // TESTE(5)
    // Se os seletores existirem, o código vai funcionar
    if(openButton && closeButton && modalContainer) {
    
    // adiconando eventos de 'click', abrir, fechar e clique fora do modal(2)
    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', outModal);
  }
}