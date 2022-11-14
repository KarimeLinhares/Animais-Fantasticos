import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {

  // função que cria os animais, e os transforma no HTML esperado
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  
  // promise
  async function fetchAnimais(url) {
    try { // tente rodar
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      // response
      animaisJson.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      })
      initAnimaNumeros();
    } catch(erro) { // se não conseguir, mostre o erro
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}