// função do scroll suave
export default function initScroll() {
  // seleciona todos os links internos(1)
  const innerLinks = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  // função que linka o item do navegador com a sua seção(3)
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href'); // pega o atributo do href
    const section = document.querySelector(href);
    
    // faz o movimento de scroll do item para a seção(4)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // loop que adiciona para cada link um evento de 'click'(2)
  innerLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
