// Seleciona os elementos de navegação e o carrossel
const scrollLeftButton = document.getElementById('scrollLeft--lp-folheto-AP');
const scrollRightButton = document.getElementById('scrollRight--lp-folheto-AP');
const carousel = document.getElementById('lp-folheto-AP--carousel-itens');

// Função para rolar o carrossel para a esquerda
scrollLeftButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -carousel.clientWidth, // Rola a largura visível do carrossel para a esquerda
    behavior: 'smooth' // Anima a rolagem
  });
});

// Função para rolar o carrossel para a direita
scrollRightButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: carousel.clientWidth, // Rola a largura visível do carrossel para a direita
    behavior: 'smooth' // Anima a rolagem
  });
});

