export default function initTooltip () {

  // selecionar a imagem do mapa(1)
  const toolTips = document.querySelectorAll('[data-tooltip]');

  // evento para cada vez que o mouse passar sobre a imagem(2)
  toolTips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  })

  function onMouseOver(event) {
    const toolTipBox = createTooltipBox(this);

    // preenche o objeto 'onMouseMove' com a toolTipBox
    onMouseMove.toolTipBox = toolTipBox;

    // evento em que a tooltip segue o mouse 
    this.addEventListener('mousemove', onMouseMove);

    // preenche o objeto 'onMouseLeave' com a toolTipBox
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;

    // adiciona o evento de mouse leave
    this.addEventListener('mouseleave', onMouseLeave);   
  }

  const onMouseLeave = {
    
    //consegue com que a tooltip seja removida, mesmo ele não estando dentro da função(5)
    handleEvent() { 
      this.toolTipBox.remove();

      // remove a lista de eventos(6)
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  // sempre atualiza o local do mouse, permitindo o evento de a tooltip seguir o mouse
  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + 'px';
      this.toolTipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  // função que cria uma nova 'div', com uma uma nova classe, e o texto do aria-label(3)
  // Ela é adicionada ao final do documento
  function createTooltipBox(element) {
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}