const imagensAP = [
  "./Inicio Imgs/51dac0e5-44ad-4e2b-a594-be3557fd58f0.png",
  "./Inicio Imgs/17a2ba1b-1bf5-4fc4-9c4c-72fb4bafbb6f.png",
  "./Inicio Imgs/607df068-7d9d-43bb-bfc8-f10d30f3484e.png",
];

const imgElemento = document.querySelector("#carrosselAP img");
let indiceAtual = 0;

function mudarFoto() {
  indiceAtual = indiceAtual + 1;

  if (indiceAtual >= imagensAP.length) {
    indiceAtual = 0;
  }
  imgElemento.src = imagensAP[indiceAtual];
}

setInterval(mudarFoto, 3000);
