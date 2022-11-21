export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.coffee');
      btcPreco.innerText = (20 / bitcoin.BRL.sell).toFixed(5);
    }).catch(erro => console.log(Error(erro)));
}
