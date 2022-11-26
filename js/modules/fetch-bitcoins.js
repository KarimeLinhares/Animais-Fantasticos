export default function FetchBitcoin(url, target) {
  fetch(url)
    .then(response => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (20 / bitcoin.BRL.sell).toFixed(5);
    }).catch(erro => console.log(Error(erro)));
}
