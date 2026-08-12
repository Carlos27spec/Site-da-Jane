function iniciarCarrossel(seletor, imagens, intervaloMs = 3000) {
  const imgElemento = document.querySelector(seletor);

  // pega a imagem que já está definida no HTML e coloca ela como a primeira do carrossel
  const todasImagens = [imgElemento.getAttribute("src"), ...imagens];

  let indiceAtual = 0;

  setInterval(() => {
    indiceAtual = indiceAtual + 1;

    if (indiceAtual >= todasImagens.length) {
      indiceAtual = 0;
    }
    imgElemento.src = todasImagens[indiceAtual];
  }, intervaloMs);
}

const imagensAP = [
  "./assets/image/cabelos/InicioImgs/51dac0e5-44ad-4e2b-a594-be3557fd58f0.png",
  "./assets/image/cabelos/InicioImgs/17a2ba1b-1bf5-4fc4-9c4c-72fb4bafbb6f.png",
  "./assets/image/cabelos/InicioImgs/607df068-7d9d-43bb-bfc8-f10d30f3484e.png",
];

const imagensLS = [
  "./assets/image/cabelos/Lisos/8183e575-3125-4c4f-8d80-6e4adb98c35d.png",
  "./assets/image/cabelos/Lisos/17a2ba1b-1bf5-4fc4-9c4c-72fb4bafbb6f.png",
  "./assets/image/cabelos/Lisos/a6d731de-bf22-4bf0-9567-d077ccad21f1.png",
];

const imagensON = [
  "./assets/image/cabelos/Ondulados/1b2f0b88-3fbe-4499-b546-64eea6975de7.png",
  "./assets/image/cabelos/Ondulados/26537475-d261-4a09-bfda-f189fdfbe4f9.png",
  "./assets/image/cabelos/Ondulados/607df068-7d9d-43bb-bfc8-f10d30f3484e.png",
];

const imagensCH = [
  "./assets/image/cabelos/Cacheados/salao-cacheada-2.jpg",
  "./assets/image/cabelos/Cacheados/salao-cacheada-3.jpg",
  "./assets/image/cabelos/Cacheados/cacheado 4.png",
];

const imagensCT = [
  "./assets/image/cabelos/Curtos/54a25d46-304a-4e04-96b2-156c3b5e08b9.png",
  "./assets/image/cabelos/Curtos/6a29c33e-4357-4078-8df6-728c6a48a808.png",
  "./assets/image/cabelos/Curtos/3f1ff09f-7bd9-407a-86c4-ee24ac407d5c.png",
];

const imagensCP = [
  "./assets/image/cabelos/Crespo/442b4eaa-d257-44c1-b83c-410e12ef7480.png",
  "./assets/image/cabelos/Crespo/51dac0e5-44ad-4e2b-a594-be3557fd58f0.png",
  "./assets/image/cabelos/Crespo/9ed073aa-0ff5-496c-bd56-d993289ff2af.png",
];

iniciarCarrossel("#carrosselAP img", imagensAP);
iniciarCarrossel(".liso img", imagensLS);
iniciarCarrossel(".ondulado img", imagensON);
iniciarCarrossel(".cacheados img", imagensCH);
iniciarCarrossel(".curtos img", imagensCT);
iniciarCarrossel(".crespo img", imagensCP);

// função de rolagem
document.querySelector("nav > p").addEventListener("click", () => {
  document.getElementById("portifolio-section").scrollIntoView({
    behavior: "smooth",
  });
});
