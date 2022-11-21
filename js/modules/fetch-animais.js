import AnimaNumeros from "./anima-numeros.js";

export default function FetchAnimais(url, target) {

  // função que cria a div com os animais, e os transforma no HTML esperado
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'active');
    animaNumeros.init();
  }

  // promise
  // puxa os animais através de um arquivo json e cria cada animal utilizando createAnimal
  async function fetchAnimais() {
    try { // fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // Após a transformação de json, ativa as funções para preencher e animar os números
      // response
      animaisJson.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch(erro) { // se não conseguir, mostre o erro
      console.log(erro);
    }
  }

  return fetchAnimais();
}