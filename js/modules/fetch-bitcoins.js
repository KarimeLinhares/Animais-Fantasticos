export default function FetchBitcoins(url, target) {
  
  // promise/response
  fetch(url)
    .then(response => response.json())
    .then(bitcoin => {
      const coffeePrice = document.querySelector(target);
      coffeePrice.innerText = (20 / bitcoin.BRL.buy).toFixed(5);
    }).catch (erro => console.log(Error(erro)));
}