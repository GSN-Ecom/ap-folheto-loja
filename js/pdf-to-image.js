// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  carregarDadosFolheto();
  carregarFolhetoCarrossel_1();
  carregarFolhetoCarrossel_2();
  carregarFolhetoCarrossel_3();
  verificarConteudoVideoVT();
  verificarConteudoCoupon();
  criarCardsDeLojas();
  carregarStores(); // Chamada para a nova função
});

// Declare as constantes uma vez
const SPREADSHEET_ID = "1VG50pLDcO4Kgi1RgMp-FOOuIxZlLgqaiNOOwlf368po";
const API_KEY = "AIzaSyDZnfHhFUOkVlhQB2lDDQNaVtXuYDVqWXU";
const RANGE_DATA = "page-content!B2"; // Para a função carregarDadosFolheto
const RANGE_LINKS = "page-content!B5:D5"; // Para os links na função verificarLinks
const RANGE_STORES = "stores!A3:F"; // Para a nova função carregarStores
const RANGE_PAGES_FOLHETO = "folhetoCarrossel_1!U4:X"; // Para a nova função carregarFolhetoCarrossel_1
const RANGE_PAGES_FOLHETO_2 = "folhetoCarrossel_2!U4:X"; // Para a nova função carregarFolhetoCarrossel_2
const RANGE_PAGES_FOLHETO_3 = "folhetoCarrossel_3!U4:X"; // Para a nova função carregarFolhetoCarrossel_3

// // Função para carregar os dados da planilha para a loja

function carregarFolhetoCarrossel_1() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_PAGES_FOLHETO}?key=${API_KEY}`;
  const container = document.getElementById("container-carrosseis");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rows = data.values;

      // Verifica se a célula U4 está vazia
      if (!rows || rows.length === 0 || !rows[0] || rows[0][0] === "") {
        container.style.display = "none"; // Oculta o container se U4 estiver vazia
        return;
      }

      // Se U4 não está vazia, exibe o container e constrói o carrossel
      container.style.display = "block";

      const carouselWrapper = document.createElement("div");
      carouselWrapper.classList.add("slider-folheto-loja-fisica-sn");

      const scrollLeft = document.createElement("img");
      scrollLeft.id = "scrollLeft--carousel-position-1";
      scrollLeft.classList.add("scrollLeft");
      scrollLeft.src = "imgs/nav-arrow-left.svg";
      scrollLeft.alt = "Mover para esquerda";
      carouselWrapper.appendChild(scrollLeft);

      const carousel = document.createElement("div");
      carousel.id = "sn--folheto--carousel-position-1";
      carousel.classList.add("cards-carrossel-folheto-loja-fisica-sn");
      carouselWrapper.appendChild(carousel);

      const scrollRight = document.createElement("img");
      scrollRight.id = "scrollRight--carousel-position-1";
      scrollRight.classList.add("scrollRight");
      scrollRight.src = "imgs/nav-arrow-right.svg";
      scrollRight.alt = "Mover para a direita";
      carouselWrapper.appendChild(scrollRight);

      container.appendChild(carouselWrapper);

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        if (row.length === 0) break;

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-pagina-folheto-loja-fisica-sn");

        const image = document.createElement("img");
        image.classList.add("page-folheto-image");
        image.src = row[0];
        image.alt = row[1];
        image.title = row[2];
        image.loading = row[3];

        // Adiciona o evento de clique para abrir o overlay
        image.addEventListener("click", () => {
          abrirOverlay(image.src);
        });

        imageContainer.appendChild(image);
        carousel.appendChild(imageContainer);
      }

      scrollLeft.addEventListener("click", () => {
        carousel.scrollBy({ left: -200, behavior: "smooth" });
      });

      scrollRight.addEventListener("click", () => {
        carousel.scrollBy({ left: 200, behavior: "smooth" });
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar as imagens do carrossel 1:", error)
    );
}

function carregarFolhetoCarrossel_2() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_PAGES_FOLHETO_2}?key=${API_KEY}`;
  const container = document.getElementById("container-carrosseis_2");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rows = data.values;

      // Verifica se a célula U4 está vazia
      if (!rows || rows.length === 0 || !rows[0] || rows[0][0] === "") {
        container.style.display = "none"; // Oculta o container se U4 estiver vazia
        return;
      }

      // Se U4 não está vazia, exibe o container e constrói o carrossel
      container.style.display = "block";

      const carouselWrapper = document.createElement("div");
      carouselWrapper.classList.add("slider-folheto-loja-fisica-sn");

      const scrollLeft = document.createElement("img");
      scrollLeft.id = "scrollLeft--carousel-position-2";
      scrollLeft.classList.add("scrollLeft");
      scrollLeft.src = "imgs/nav-arrow-left.svg";
      scrollLeft.alt = "Mover para esquerda";
      carouselWrapper.appendChild(scrollLeft);

      const carousel = document.createElement("div");
      carousel.id = "sn--folheto--carousel-position-2";
      carousel.classList.add("cards-carrossel-folheto-loja-fisica-sn");
      carouselWrapper.appendChild(carousel);

      const scrollRight = document.createElement("img");
      scrollRight.id = "scrollRight--carousel-position-2";
      scrollRight.classList.add("scrollRight");
      scrollRight.src = "imgs/nav-arrow-right.svg";
      scrollRight.alt = "Mover para a direita";
      carouselWrapper.appendChild(scrollRight);

      container.appendChild(carouselWrapper);

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        if (row.length === 0) break;

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-pagina-folheto-loja-fisica-sn");

        const image = document.createElement("img");
        image.classList.add("page-folheto-image");
        image.src = row[0];
        image.alt = row[1];
        image.title = row[2];
        image.loading = row[3];

        // Adicionar o evento de clique para abrir o overlay
        image.addEventListener("click", () => {
          abrirOverlay(image.src);
        });

        imageContainer.appendChild(image);
        carousel.appendChild(imageContainer);
      }

      scrollLeft.addEventListener("click", () => {
        carousel.scrollBy({ left: -200, behavior: "smooth" });
      });

      scrollRight.addEventListener("click", () => {
        carousel.scrollBy({ left: 200, behavior: "smooth" });
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar as imagens do carrossel 2:", error)
    );
}

function carregarFolhetoCarrossel_3() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_PAGES_FOLHETO_3}?key=${API_KEY}`;
  const container = document.getElementById("container-carrosseis_3");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rows = data.values;

      // Verifica se a célula U4 está vazia
      if (!rows || rows.length === 0 || !rows[0] || rows[0][0] === "") {
        container.style.display = "none"; // Oculta o container se U4 estiver vazia
        return;
      }

      // Se U4 não está vazia, exibe o container e constrói o carrossel
      container.style.display = "block";

      const carouselWrapper = document.createElement("div");
      carouselWrapper.classList.add("slider-folheto-loja-fisica-sn");

      const scrollLeft = document.createElement("img");
      scrollLeft.id = "scrollLeft--carousel-position-3";
      scrollLeft.classList.add("scrollLeft");
      scrollLeft.src = "imgs/nav-arrow-left.svg";
      scrollLeft.alt = "Mover para esquerda";
      carouselWrapper.appendChild(scrollLeft);

      const carousel = document.createElement("div");
      carousel.id = "sn--folheto--carousel-position-3";
      carousel.classList.add("cards-carrossel-folheto-loja-fisica-sn");
      carouselWrapper.appendChild(carousel);

      const scrollRight = document.createElement("img");
      scrollRight.id = "scrollRight--carousel-position-3";
      scrollRight.classList.add("scrollRight");
      scrollRight.src = "imgs/nav-arrow-right.svg";
      scrollRight.alt = "Mover para a direita";
      carouselWrapper.appendChild(scrollRight);

      container.appendChild(carouselWrapper);

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        if (row.length === 0) break;

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-pagina-folheto-loja-fisica-sn");

        const image = document.createElement("img");
        image.classList.add("page-folheto-image");
        image.src = row[0];
        image.alt = row[1];
        image.title = row[2];
        image.loading = row[3];

        // Adicionar o evento de clique para abrir o overlay
        image.addEventListener("click", () => {
          abrirOverlay(image.src);
        });

        imageContainer.appendChild(image);
        carousel.appendChild(imageContainer);
      }

      scrollLeft.addEventListener("click", () => {
        carousel.scrollBy({ left: -200, behavior: "smooth" });
      });

      scrollRight.addEventListener("click", () => {
        carousel.scrollBy({ left: 200, behavior: "smooth" });
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar as imagens do carrossel 3:", error)
    );
}

// Função para abrir o overlay com a imagem
function abrirOverlay(src) {
  const overlay = document.getElementById("image-overlay");
  const overlayImage = document.getElementById("overlay-image");
  overlayImage.src = src;
  overlay.style.display = "flex"; // Exibe o overlay
}

// Fechar o overlay ao clicar fora da imagem ou no botão de fechar
document.getElementById("close-overlay").addEventListener("click", () => {
  const overlay = document.getElementById("image-overlay");
  overlay.style.display = "none"; // Esconde o overlay ao clicar no botão de fechar
});

document.getElementById("image-overlay").addEventListener("click", (e) => {
  if (e.target.id === "image-overlay") {
    e.target.style.display = "none"; // Esconde o overlay se o clique for fora da imagem
  }
});

// Função para carregar os dados da planilha
function carregarDadosFolheto() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_DATA}?key=${API_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar dados da planilha");
      }
      return response.json();
    })
    .then((data) => {
      const dataInDataOut = data.values[0][0]; // Obtém o valor da célula B2
      inserirConteudo(dataInDataOut);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });

  // Verificar e inserir links
  verificarLinks();
}

// Função para verificar os links nas células B5, C5, D5 e adicionar ao HTML
function verificarLinks() {
  const urlLinks = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_LINKS}?key=${API_KEY}`;

  fetch(urlLinks)
    .then((response) => response.json())
    .then((data) => {
      const links = data.values[0]; // Array com os valores das células B5, C5 e D5
      const containerDownloadLinks = document.getElementById(
        "row-download-file--lp-folheto-loja-AP"
      );
      const containerShareLinks = document.getElementById(
        "row-share-file--lp-folheto-loja-AP"
      );

      links.forEach((link) => {
        if (link) {
          // Verifica se a célula tem conteúdo
          // Cria o componente <a>
          const linkElement = document.createElement("a");
          linkElement.href = link;

          // Cria o conteúdo do botão dentro do <a>
          const divButton = document.createElement("div");
          divButton.className = "lp-folheto--btn-whatsapp--download";
          divButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" target="_blank">
                            <path d="M8.36917 11.8693C8.27443 11.9729 8.14057 12.0319 8.00017 12.0319C7.85977 12.0319 7.7259 11.9729 7.63117 11.8693L4.96449 8.95263C4.77815 8.74883 4.79231 8.43257 4.99611 8.24623C5.19992 8.0599 5.51618 8.07403 5.70251 8.27783L7.50017 10.244V2.86523C7.50017 2.58909 7.72403 2.36523 8.00017 2.36523C8.2763 2.36523 8.50017 2.58909 8.50017 2.86523V10.244L10.2978 8.27783C10.4842 8.07403 10.8004 8.0599 11.0042 8.24623C11.208 8.43257 11.2222 8.74883 11.0358 8.95263L8.36917 11.8693Z" fill="white"/>
                            <path d="M2.5 10.8652C2.5 10.5891 2.27615 10.3652 2 10.3652C1.72386 10.3652 1.5 10.5891 1.5 10.8652V10.9018C1.49999 11.8136 1.49997 12.5484 1.57768 13.1264C1.65836 13.7265 1.83095 14.2317 2.23223 14.633C2.63351 15.0343 3.13876 15.2069 3.73883 15.2876C4.31681 15.3652 5.05169 15.3652 5.96342 15.3652H10.0366C10.9483 15.3652 11.6832 15.3652 12.2612 15.2876C12.8613 15.2069 13.3665 15.0343 13.7678 14.633C14.1691 14.2317 14.3417 13.7265 14.4223 13.1264C14.5 12.5484 14.5 11.8136 14.5 10.9018V10.8652C14.5 10.5891 14.2761 10.3652 14 10.3652C13.7239 10.3652 13.5 10.5891 13.5 10.8652C13.5 11.8222 13.4989 12.4896 13.4313 12.9932C13.3655 13.4824 13.2452 13.7414 13.0607 13.9259C12.8761 14.1104 12.6171 14.2307 12.1279 14.2965C11.6243 14.3642 10.9569 14.3652 10 14.3652H6C5.04306 14.3652 4.37565 14.3642 3.87208 14.2965C3.3829 14.2307 3.12385 14.1104 2.93934 13.9259C2.75483 13.7414 2.63453 13.4824 2.56877 12.9932C2.50106 12.4896 2.5 11.8222 2.5 10.8652Z" fill="white"/>
                        </svg>
                    `;

          // Adiciona o botão ao link
          linkElement.appendChild(divButton);

          // Adiciona o link ao container
          containerDownloadLinks.appendChild(linkElement);
        }
      });

      const shareElement = document.createElement("a");
      shareElement.href =
        "https://api.whatsapp.com/send?text=Ofertas imperdíveis te esperam! Baixe agora o folheto do Apoio Entrega e garanta os melhores preços! https://www.apoioentrega.com/folheto-loja-fisica";
      shareElement.target = "_blank";
      shareElement.className = "lp-folheto--btn-whatsapp--share";
      shareElement.innerHTML = `
        <svg width="133" height="32" viewBox="0 0 133 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="0.5" width="131" height="31" rx="7.5" fill="#E12428"/>
        <rect x="1" y="0.5" width="131" height="31" rx="7.5" stroke="#E12428"/>
        <path d="M16.707 17.1699H18.459C18.4238 17.7441 18.2656 18.2539 17.9844 18.6992C17.707 19.1445 17.3184 19.4922 16.8184 19.7422C16.3223 19.9922 15.7246 20.1172 15.0254 20.1172C14.4785 20.1172 13.9883 20.0234 13.5547 19.8359C13.1211 19.6445 12.75 19.3711 12.4414 19.0156C12.1367 18.6602 11.9043 18.2305 11.7441 17.7266C11.584 17.2227 11.5039 16.6582 11.5039 16.0332V15.4414C11.5039 14.8164 11.5859 14.252 11.75 13.748C11.918 13.2402 12.1562 12.8086 12.4648 12.4531C12.7773 12.0977 13.1504 11.8242 13.584 11.6328C14.0176 11.4414 14.502 11.3457 15.0371 11.3457C15.748 11.3457 16.3477 11.4746 16.8359 11.7324C17.3281 11.9902 17.709 12.3457 17.9785 12.7988C18.252 13.252 18.416 13.7676 18.4707 14.3457H16.7129C16.6934 14.002 16.625 13.7109 16.5078 13.4727C16.3906 13.2305 16.2129 13.0488 15.9746 12.9277C15.7402 12.8027 15.4277 12.7402 15.0371 12.7402C14.7441 12.7402 14.4883 12.7949 14.2695 12.9043C14.0508 13.0137 13.8672 13.1797 13.7188 13.4023C13.5703 13.625 13.459 13.9062 13.3848 14.2461C13.3145 14.582 13.2793 14.9766 13.2793 15.4297V16.0332C13.2793 16.4746 13.3125 16.8633 13.3789 17.1992C13.4453 17.5312 13.5469 17.8125 13.6836 18.043C13.8242 18.2695 14.0039 18.4414 14.2227 18.5586C14.4453 18.6719 14.7129 18.7285 15.0254 18.7285C15.3926 18.7285 15.6953 18.6699 15.9336 18.5527C16.1719 18.4355 16.3535 18.2617 16.4785 18.0312C16.6074 17.8008 16.6836 17.5137 16.707 17.1699ZM26.6211 15.5352V15.9395C26.6211 16.5879 26.5332 17.1699 26.3574 17.6855C26.1816 18.2012 25.9336 18.6406 25.6133 19.0039C25.293 19.3633 24.9102 19.6387 24.4648 19.8301C24.0234 20.0215 23.5332 20.1172 22.9941 20.1172C22.459 20.1172 21.9688 20.0215 21.5234 19.8301C21.082 19.6387 20.6992 19.3633 20.375 19.0039C20.0508 18.6406 19.7988 18.2012 19.6191 17.6855C19.4434 17.1699 19.3555 16.5879 19.3555 15.9395V15.5352C19.3555 14.8828 19.4434 14.3008 19.6191 13.7891C19.7949 13.2734 20.043 12.834 20.3633 12.4707C20.6875 12.1074 21.0703 11.8301 21.5117 11.6387C21.957 11.4473 22.4473 11.3516 22.9824 11.3516C23.5215 11.3516 24.0117 11.4473 24.4531 11.6387C24.8984 11.8301 25.2812 12.1074 25.6016 12.4707C25.9258 12.834 26.1758 13.2734 26.3516 13.7891C26.5312 14.3008 26.6211 14.8828 26.6211 15.5352ZM24.8457 15.9395V15.5234C24.8457 15.0703 24.8047 14.6719 24.7227 14.3281C24.6406 13.9844 24.5195 13.6953 24.3594 13.4609C24.1992 13.2266 24.0039 13.0508 23.7734 12.9336C23.543 12.8125 23.2793 12.752 22.9824 12.752C22.6855 12.752 22.4219 12.8125 22.1914 12.9336C21.9648 13.0508 21.7715 13.2266 21.6113 13.4609C21.4551 13.6953 21.3359 13.9844 21.2539 14.3281C21.1719 14.6719 21.1309 15.0703 21.1309 15.5234V15.9395C21.1309 16.3887 21.1719 16.7871 21.2539 17.1348C21.3359 17.4785 21.457 17.7695 21.6172 18.0078C21.7773 18.2422 21.9727 18.4199 22.2031 18.541C22.4336 18.6621 22.6973 18.7227 22.9941 18.7227C23.291 18.7227 23.5547 18.6621 23.7852 18.541C24.0156 18.4199 24.209 18.2422 24.3652 18.0078C24.5215 17.7695 24.6406 17.4785 24.7227 17.1348C24.8047 16.7871 24.8457 16.3887 24.8457 15.9395ZM28.6895 11.4688H30.1777L32.3691 17.7324L34.5605 11.4688H36.0488L32.9668 20H31.7715L28.6895 11.4688ZM27.8867 11.4688H29.3691L29.6387 17.5742V20H27.8867V11.4688ZM35.3691 11.4688H36.8574V20H35.0996V17.5742L35.3691 11.4688ZM41.7207 16.959H39.5469V15.5879H41.7207C42.0566 15.5879 42.3301 15.5332 42.541 15.4238C42.752 15.3105 42.9062 15.1543 43.0039 14.9551C43.1016 14.7559 43.1504 14.5312 43.1504 14.2812C43.1504 14.0273 43.1016 13.791 43.0039 13.5723C42.9062 13.3535 42.752 13.1777 42.541 13.0449C42.3301 12.9121 42.0566 12.8457 41.7207 12.8457H40.1562V20H38.3984V11.4688H41.7207C42.3887 11.4688 42.9609 11.5898 43.4375 11.832C43.918 12.0703 44.2852 12.4004 44.5391 12.8223C44.793 13.2441 44.9199 13.7266 44.9199 14.2695C44.9199 14.8203 44.793 15.2969 44.5391 15.6992C44.2852 16.1016 43.918 16.4121 43.4375 16.6309C42.9609 16.8496 42.3887 16.959 41.7207 16.959ZM48.6289 12.9277L46.3086 20H44.4395L47.6094 11.4688H48.7988L48.6289 12.9277ZM50.5566 20L48.2305 12.9277L48.043 11.4688H49.2441L52.4316 20H50.5566ZM50.4512 16.8242V18.2012H45.9453V16.8242H50.4512ZM53.2227 11.4688H56.4043C57.0566 11.4688 57.6172 11.5664 58.0859 11.7617C58.5586 11.957 58.9219 12.2461 59.1758 12.6289C59.4297 13.0117 59.5566 13.4824 59.5566 14.041C59.5566 14.498 59.4785 14.8906 59.3223 15.2188C59.1699 15.543 58.9531 15.8145 58.6719 16.0332C58.3945 16.248 58.0684 16.4199 57.6934 16.5488L57.1367 16.8418H54.3711L54.3594 15.4707H56.416C56.7246 15.4707 56.9805 15.416 57.1836 15.3066C57.3867 15.1973 57.5391 15.0449 57.6406 14.8496C57.7461 14.6543 57.7988 14.4277 57.7988 14.1699C57.7988 13.8965 57.748 13.6602 57.6465 13.4609C57.5449 13.2617 57.3906 13.1094 57.1836 13.0039C56.9766 12.8984 56.7168 12.8457 56.4043 12.8457H54.9805V20H53.2227V11.4688ZM57.9922 20L56.0469 16.1973L57.9043 16.1855L59.873 19.918V20H57.9922ZM64.373 11.4688V20H62.6211V11.4688H64.373ZM66.998 11.4688V12.8457H60.0371V11.4688H66.998ZM69.8691 11.4688V20H68.1172V11.4688H69.8691ZM77 18.6289V20H72.7051V18.6289H77ZM73.2734 11.4688V20H71.5156V11.4688H73.2734ZM83.6973 14.9434V16.3145H79.2441V14.9434H83.6973ZM79.7656 11.4688V20H78.0078V11.4688H79.7656ZM84.9512 11.4688V20H83.1992V11.4688H84.9512ZM90.0547 12.9277L87.7344 20H85.8652L89.0352 11.4688H90.2246L90.0547 12.9277ZM91.9824 20L89.6562 12.9277L89.4688 11.4688H90.6699L93.8574 20H91.9824ZM91.877 16.8242V18.2012H87.3711V16.8242H91.877ZM94.6484 11.4688H97.8301C98.4824 11.4688 99.043 11.5664 99.5117 11.7617C99.9844 11.957 100.348 12.2461 100.602 12.6289C100.855 13.0117 100.982 13.4824 100.982 14.041C100.982 14.498 100.904 14.8906 100.748 15.2188C100.596 15.543 100.379 15.8145 100.098 16.0332C99.8203 16.248 99.4941 16.4199 99.1191 16.5488L98.5625 16.8418H95.7969L95.7852 15.4707H97.8418C98.1504 15.4707 98.4062 15.416 98.6094 15.3066C98.8125 15.1973 98.9648 15.0449 99.0664 14.8496C99.1719 14.6543 99.2246 14.4277 99.2246 14.1699C99.2246 13.8965 99.1738 13.6602 99.0723 13.4609C98.9707 13.2617 98.8164 13.1094 98.6094 13.0039C98.4023 12.8984 98.1426 12.8457 97.8301 12.8457H96.4062V20H94.6484V11.4688ZM99.418 20L97.4727 16.1973L99.3301 16.1855L101.299 19.918V20H99.418Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M116.128 19.1362L120.4 15.8767C120.569 15.7512 120.667 15.5635 120.667 15.3652C120.667 15.1669 120.569 14.9793 120.4 14.8537L116.128 11.5942C115.9 11.4169 115.581 11.3735 115.306 11.4823C115.031 11.5911 114.848 11.8331 114.836 12.1057V13.3913C108.837 12.4455 107.333 17.3313 107.333 20.0898C108.725 17.9884 112.331 14.1793 114.836 17.3313V18.6204C114.847 18.8938 115.029 19.1373 115.304 19.2471C115.579 19.357 115.899 19.3139 116.128 19.1362Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      containerShareLinks.appendChild(shareElement);
    })
    .catch((error) => console.error("Erro ao verificar links:", error));
}

// Função para inserir o conteúdo no HTML
function inserirConteudo(dataInDataOut) {
  const container = document.getElementById("lp-folheto-AP_DataInDataOut");

  if (container) {
    const lojaLabel = document.createElement("p");
    lojaLabel.className = "text-lp-label-small";
    lojaLabel.textContent = "Loja física";

    const ofertasTitulo = document.createElement("h1");
    ofertasTitulo.className = "text-lp";
    ofertasTitulo.textContent = "Ofertas do folheto Apoio Mineiro";

    const ofertasData = document.createElement("p");
    ofertasData.className = "text-lp-label-small";
    ofertasData.textContent = `${dataInDataOut}`;

    // Insere os elementos no container
    container.appendChild(lojaLabel);
    container.appendChild(ofertasTitulo);
    container.appendChild(ofertasData);
  } else {
    console.error(
      'Elemento com id "lp-folheto-AP_DataInDataOut" não encontrado'
    );
  }
}

// Função para verificar o conteúdo da célula D9 e aplicar as ações necessárias
function verificarConteudoVideoVT() {
  const RANGE_VIDEO_VT = "page-content!D9"; // Célula D9
  const urlVideoVT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_VIDEO_VT}?key=${API_KEY}`;

  fetch(urlVideoVT)
    .then((response) => response.json())
    .then((data) => {
      const videoVTContent = data.values ? data.values[0][0] : ""; // Pega o valor da célula D9

      const videoContainer = document.getElementById(
        "lp-folheto-AP--block-vt-YT"
      );
      const videoElement = document.getElementById("lp-folheto-AP_VideoVT");

      if (!videoVTContent) {
        // Se a célula estiver vazia, ocultar o elemento e zerar padding
        videoContainer.style.display = "none";
        videoContainer.style.padding = "0";
      } else {
        // Se houver conteúdo, inserir no elemento de vídeo
        videoElement.innerHTML = videoVTContent;
      }
    })
    .catch((error) =>
      console.error("Erro ao buscar conteúdo de vídeo VT:", error)
    );
}

// Função para verificar o conteúdo das células B14:B17 e alimentar as estruturas do HTML
function verificarConteudoCoupon() {
  const RANGE_COUPON = "page-content!B14:B17"; // Intervalo B14:B17
  const urlCoupon = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_COUPON}?key=${API_KEY}`;

  fetch(urlCoupon)
    .then((response) => response.json())
    .then((data) => {
      const values = data.values || [];

      // Elementos HTML que receberão o conteúdo das células
      const titleElement = document.getElementById("lp-folheto-AP_titleCoupon");
      const subtitleElement = document.getElementById(
        "lp-folheto-AP_subtitleCoupon"
      );
      const firstOrderElement = document.getElementById(
        "lp-folheto-AP_CouponFirstOrder"
      );
      const supportingTextElement = document.getElementById(
        "lp-folheto-AP_supporting-text"
      );
      const clubeApoioElement = document.getElementById(
        "lp-folheto-AP--clube-apoio"
      );

      // Atribuindo valores às variáveis, considerando se existem dados
      const titleCoupon = values[0] ? values[0][0] : "";
      const subtitleCoupon = values[1] ? values[1][0] : "";
      const couponFirstOrder = values[2] ? values[2][0] : "";
      const supportingText = values[3] ? values[3][0] : "";

      // Insere conteúdo nos elementos HTML
      if (titleCoupon) {
        titleElement.textContent = titleCoupon;
      }
      if (subtitleCoupon) {
        subtitleElement.textContent = subtitleCoupon;
      }
      if (couponFirstOrder) {
        firstOrderElement.textContent = couponFirstOrder;
      }
      if (supportingText) {
        supportingTextElement.textContent = supportingText;
      }

      // Verifica se alguma célula está vazia e oculta o elemento 'lp-folheto-AP--clube-apoio'
      if (
        !titleCoupon ||
        !subtitleCoupon ||
        !couponFirstOrder ||
        !supportingText
      ) {
        clubeApoioElement.style.display = "none";
      }
    })
    .catch((error) => console.error("Erro ao buscar dados do cupom:", error));
}

function carregarStores() {
  // Configurar a URL da API do Google Sheets
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_STORES}?key=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rows = data.values;
      const container = document.getElementById(
        "lp-folheto-AP--carousel-itens"
      );

      // Loop através das linhas da planilha
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        // Verificar se a linha não está vazia
        if (row.length === 0) {
          break; // Para se encontrar uma linha vazia
        }

        // Criar o elemento do card da loja
        const card = document.createElement("div");
        card.classList.add("avaliable-store--card");

        // Preencher os dados da loja
        card.innerHTML = `
                    
                    <div class="image-store">
                        <div class="lp-folheto-AP--image-store"><img id=lp-folheto-AP_image-store src="${row[0]}"></div>
                    </div>
                    <div class="title">
                        <p id=lp-folheto-AP_name-store class="text-lp-paragraph">${row[1]}</p>
                    </div>
                    <div class="description">
                        <div class="row--address">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                              <mask id="mask0_393_71467" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                                <rect y="0.865234" width="24" height="24" fill="#D9D9D9"/>
                              </mask>
                              <g mask="url(#mask0_393_71467)">
                                <path d="M12 22.6152C10.3102 22.6152 8.92948 22.3601 7.85768 21.8498C6.78589 21.3396 6.25 20.6781 6.25 19.8652C6.25 19.3781 6.4548 18.9451 6.8644 18.5662C7.27402 18.1874 7.83972 17.8762 8.5615 17.6326L8.99225 19.0614C8.67687 19.1768 8.41212 19.3066 8.19802 19.4508C7.98392 19.595 7.84483 19.7332 7.78073 19.8652C7.94611 20.2217 8.43809 20.5191 9.25668 20.7576C10.0753 20.996 10.9897 21.1153 12 21.1153C13.0038 21.1153 13.9192 20.996 14.7462 20.7576C15.5731 20.5191 16.0692 20.2217 16.2346 19.8652C16.1705 19.7332 16.0314 19.5966 15.8173 19.4556C15.6032 19.3146 15.3385 19.1832 15.0231 19.0614L15.4635 17.6326C16.1852 17.8762 16.7468 18.1874 17.148 18.5662C17.5493 18.9451 17.75 19.3781 17.75 19.8652C17.75 20.6781 17.2141 21.3396 16.1423 21.8498C15.0705 22.3601 13.6897 22.6152 12 22.6152ZM12 16.7095C12.3 16.1403 12.6359 15.588 13.0077 15.0528C13.3795 14.5175 13.7526 14.0063 14.1269 13.5191C14.7564 12.6999 15.2593 11.9582 15.6356 11.2941C16.0119 10.63 16.2 9.80371 16.2 8.81524C16.2 7.65114 15.791 6.66011 14.9731 5.84214C14.1551 5.02419 13.1641 4.61522 12 4.61522C10.8359 4.61522 9.84484 5.02419 9.02687 5.84214C8.20892 6.66011 7.79995 7.65114 7.79995 8.81524C7.79995 9.80371 7.9897 10.63 8.3692 11.2941C8.74868 11.9582 9.24996 12.6999 9.87302 13.5191C10.2474 14.0063 10.6205 14.5175 10.9923 15.0528C11.3641 15.588 11.7 16.1403 12 16.7095ZM12 19.3075C11.8359 19.3075 11.6852 19.2533 11.548 19.145C11.4109 19.0367 11.309 18.8973 11.2423 18.7267C10.8333 17.6075 10.3468 16.6687 9.78268 15.9104C9.21858 15.1521 8.67434 14.4255 8.14997 13.7306C7.64229 13.0357 7.20704 12.3159 6.84422 11.571C6.48141 10.8261 6.3 9.90754 6.3 8.81524C6.3 7.21909 6.85096 5.87006 7.95287 4.76814C9.05479 3.66622 10.4038 3.11526 12 3.11526C13.5961 3.11526 14.9452 3.66622 16.0471 4.76814C17.149 5.87006 17.7 7.21909 17.7 8.81524C17.7 9.90754 17.5227 10.8261 17.1682 11.571C16.8137 12.3159 16.3743 13.0357 15.85 13.7306C15.3423 14.4255 14.8022 15.1521 14.2298 15.9104C13.6573 16.6687 13.1666 17.6075 12.7576 18.7267C12.691 18.8973 12.5891 19.0367 12.4519 19.145C12.3147 19.2533 12.1641 19.3075 12 19.3075ZM12 10.6421C12.5064 10.6421 12.9375 10.4643 13.2932 10.1085C13.649 9.75272 13.8269 9.32164 13.8269 8.81524C13.8269 8.30884 13.649 7.87776 13.2932 7.52199C12.9375 7.16622 12.5064 6.98834 12 6.98834C11.4936 6.98834 11.0625 7.16622 10.7067 7.52199C10.351 7.87776 10.1731 8.30884 10.1731 8.81524C10.1731 9.32164 10.351 9.75272 10.7067 10.1085C11.0625 10.4643 11.4936 10.6421 12 10.6421Z" fill="#0E2C71"/>
                              </g></svg>
                            <p id=lp-folheto-AP_address-store class="text-lp-paragraph">${row[2]}</p>
                        </div>
                        <div class="row--time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                              <mask id="mask0_393_71471" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                                <rect y="0.865234" width="24" height="24" fill="#D9D9D9"/>
                              </mask>
                              <g mask="url(#mask0_393_71471)">
                                <path d="M12.75 12.5614V8.61522C12.75 8.40273 12.6781 8.22462 12.5343 8.08087C12.3904 7.93712 12.2122 7.86524 11.9997 7.86524C11.7871 7.86524 11.609 7.93712 11.4654 8.08087C11.3218 8.22462 11.25 8.40273 11.25 8.61522V12.7922C11.25 12.9099 11.2718 13.0239 11.3154 13.1343C11.359 13.2447 11.4276 13.3466 11.5212 13.4402L14.9462 16.8652C15.0846 17.0037 15.2587 17.0745 15.4683 17.0777C15.6779 17.0809 15.8551 17.0101 16 16.8652C16.1448 16.7204 16.2173 16.5447 16.2173 16.3383C16.2173 16.1319 16.1448 15.9563 16 15.8114L12.75 12.5614ZM12.0016 22.3652C10.6877 22.3652 9.45268 22.1159 8.29655 21.6172C7.1404 21.1185 6.13472 20.4418 5.2795 19.587C4.42427 18.7321 3.74721 17.7269 3.24833 16.5712C2.74944 15.4156 2.5 14.1808 2.5 12.8669C2.5 11.553 2.74933 10.3179 3.248 9.16182C3.74667 8.00566 4.42342 6.99998 5.27825 6.14477C6.1331 5.28953 7.13834 4.61247 8.29398 4.11359C9.44959 3.61471 10.6844 3.36526 11.9983 3.36526C13.3122 3.36526 14.5473 3.6146 15.7034 4.11327C16.8596 4.61193 17.8652 5.28868 18.7205 6.14352C19.5757 6.99837 20.2527 8.00361 20.7516 9.15924C21.2505 10.3149 21.5 11.5496 21.5 12.8636C21.5 14.1775 21.2506 15.4125 20.752 16.5687C20.2533 17.7248 19.5765 18.7305 18.7217 19.5857C17.8669 20.441 16.8616 21.118 15.706 21.6169C14.5504 22.1158 13.3156 22.3652 12.0016 22.3652ZM12 20.8652C14.2166 20.8652 16.1041 20.0861 17.6625 18.5277C19.2208 16.9694 20 15.0819 20 12.8652C20 10.6486 19.2208 8.76107 17.6625 7.20274C16.1041 5.64441 14.2166 4.86524 12 4.86524C9.78331 4.86524 7.89581 5.64441 6.33748 7.20274C4.77914 8.76107 3.99998 10.6486 3.99998 12.8652C3.99998 15.0819 4.77914 16.9694 6.33748 18.5277C7.89581 20.0861 9.78331 20.8652 12 20.8652Z" fill="#0E2C71"/>
                              </g></svg>
                            <p id=lp-folheto-AP_time-store class="text-lp-paragraph">${row[3]}</p>
                        </div>
                        <div class="contact-numbers">
                            <a target="_blank" id=lp-folheto-AP_route-store href="${row[4]}">
                                <div class="lp-folheto--btn-default route"><p class="text-lp-button-default">Traçar rota</p></div>
                            </a>
                            <a target="_blank" id=lp-folheto-AP_wpp-store href="${row[5]}">
                                <div class="lp-folheto--btn-default wpp-sac"><p class="text-lp-button-default">WhatsApp</p></div>
                            </a>
                        </div>
                    </div>
                
                `;

        // Adicionar o card à div do contêiner
        container.appendChild(card);
      }
    })
    .catch((error) =>
      console.error("Erro ao carregar os dados das lojas:", error)
    );
}

function criarCardsDeLojas() {}
