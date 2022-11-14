export default function initFetchBitcoins() {
  
  //promise/response
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const coffeePrice = document.querySelector('.coffee');
    coffeePrice.innerText = (20 / bitcoin.BRL.buy).toFixed(5);
  }).catch (erro => { //caso tenha algum erro
    console.log(Error(erro));
  })
}