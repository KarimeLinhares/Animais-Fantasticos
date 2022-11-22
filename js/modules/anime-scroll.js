import debounce from "./debounce.js";

// função de animação das seções durante o scroll
export default class AnimeScroll {
  
  // argumentos
  constructor(sections) {
    // seleciona as sections com 'js-scroll'(1)
    this.sections = document.querySelectorAll(sections);

    // calcula o tamanho de 60% da tela
    this.windowMetade = window.innerHeight * 0.6;

    // o debounce evita que a animação de scroll seja ativada várias vezes de forma desnecessária
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // pega a distância de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
