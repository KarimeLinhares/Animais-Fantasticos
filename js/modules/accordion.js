// função da lista do FAQ
export default function initAccordion() {
  //seleciona os tópicos do FAQ(1)
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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
