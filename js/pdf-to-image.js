// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
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
const SPREADSHEET_ID = '1VG50pLDcO4Kgi1RgMp-FOOuIxZlLgqaiNOOwlf368po';
const API_KEY = 'AIzaSyDZnfHhFUOkVlhQB2lDDQNaVtXuYDVqWXU';
const RANGE_DATA = 'page-content!B2'; // Para a função carregarDadosFolheto
const RANGE_LINKS = 'page-content!B5:D5'; // Para os links na função verificarLinks
const RANGE_STORES = 'stores!A3:F'; // Para a nova função carregarStores
const RANGE_PAGES_FOLHETO = 'folhetoCarrossel_1!U4:X'; // Para a nova função carregarFolhetoCarrossel_1
const RANGE_PAGES_FOLHETO_2 = 'folhetoCarrossel_2!U4:X'; // Para a nova função carregarFolhetoCarrossel_2
const RANGE_PAGES_FOLHETO_3 = 'folhetoCarrossel_3!U4:X'; // Para a nova função carregarFolhetoCarrossel_3

// // Função para carregar os dados da planilha para a loja

function carregarFolhetoCarrossel_1() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_PAGES_FOLHETO}?key=${API_KEY}`;
    const container = document.getElementById('container-carrosseis');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values;
            
            // Verifica se a célula U4 está vazia
            if (!rows || rows.length === 0 || !rows[0] || rows[0][0] === "") {
                container.style.display = 'none'; // Oculta o container se U4 estiver vazia
                return;
            }

            // Se U4 não está vazia, exibe o container e constrói o carrossel
            container.style.display = 'block';

            const carouselWrapper = document.createElement('div');
            carouselWrapper.classList.add('slider-folheto-loja-fisica-sn');

            const scrollLeft = document.createElement('img');
            scrollLeft.id = 'scrollLeft--carousel-position-1';
            scrollLeft.classList.add('scrollLeft');
            scrollLeft.src = 'imgs/nav-arrow-left.svg';
            scrollLeft.alt = 'Mover para esquerda';
            carouselWrapper.appendChild(scrollLeft);

            const carousel = document.createElement('div');
            carousel.id = 'sn--folheto--carousel-position-1';
            carousel.classList.add('cards-carrossel-folheto-loja-fisica-sn');
            carouselWrapper.appendChild(carousel);

            const scrollRight = document.createElement('img');
            scrollRight.id = 'scrollRight--carousel-position-1';
            scrollRight.classList.add('scrollRight');
            scrollRight.src = 'imgs/nav-arrow-right.svg';
            scrollRight.alt = 'Mover para a direita';
            carouselWrapper.appendChild(scrollRight);

            container.appendChild(carouselWrapper);

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];

                if (row.length === 0) break;

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-pagina-folheto-loja-fisica-sn');
                
                const image = document.createElement('img');
                image.classList.add('page-folheto-image');
                image.src = row[0];
                image.alt = row[1];
                image.title = row[2];
                image.loading = row[3];

                // Adiciona o evento de clique para abrir o overlay
                image.addEventListener('click', () => {
                    abrirOverlay(image.src);
                });

                imageContainer.appendChild(image);
                carousel.appendChild(imageContainer);
            }

            scrollLeft.addEventListener('click', () => {
                carousel.scrollBy({ left: -200, behavior: 'smooth' });
            });

            scrollRight.addEventListener('click', () => {
                carousel.scrollBy({ left: 200, behavior: 'smooth' });
            });
        })
        .catch(error => console.error('Erro ao carregar as imagens do carrossel 1:', error));
}


function carregarFolhetoCarrossel_2() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_PAGES_FOLHETO_2}?key=${API_KEY}`;
const container = document.getElementById('container-carrosseis_2');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values;
            
            // Verifica se a célula U4 está vazia
            if (!rows || rows.length === 0 || !rows[0] || rows[0][0] === "") {
                container.style.display = 'none'; // Oculta o container se U4 estiver vazia
                return;
            }

            // Se U4 não está vazia, exibe o container e constrói o carrossel
            container.style.display = 'block';

            const carouselWrapper = document.createElement('div');
            carouselWrapper.classList.add('slider-folheto-loja-fisica-sn');

            const scrollLeft = document.createElement('img');
            scrollLeft.id = 'scrollLeft--carousel-position-2';
            scrollLeft.classList.add('scrollLeft');
            scrollLeft.src = 'imgs/nav-arrow-left.svg';
            scrollLeft.alt = 'Mover para esquerda';
            carouselWrapper.appendChild(scrollLeft);

            const carousel = document.createElement('div');
            carousel.id = 'sn--folheto--carousel-position-2';
            carousel.classList.add('cards-carrossel-folheto-loja-fisica-sn');
            carouselWrapper.appendChild(carousel);

            const scrollRight = document.createElement('img');
            scrollRight.id = 'scrollRight--carousel-position-2';
            scrollRight.classList.add('scrollRight');
            scrollRight.src = 'imgs/nav-arrow-right.svg';
            scrollRight.alt = 'Mover para a direita';
            carouselWrapper.appendChild(scrollRight);

            container.appendChild(carouselWrapper);

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];

                if (row.length === 0) break;

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-pagina-folheto-loja-fisica-sn');
                
                const image = document.createElement('img');
                image.classList.add('page-folheto-image');
                image.src = row[0];
                image.alt = row[1];
                image.title = row[2];
                image.loading = row[3];

                // Adicionar o evento de clique para abrir o overlay
                image.addEventListener('click', () => {
                    abrirOverlay(image.src);
                });

                imageContainer.appendChild(image);
                carousel.appendChild(imageContainer);
            }

            scrollLeft.addEventListener('click', () => {
                carousel.scrollBy({ left: -200, behavior: 'smooth' });
            });

            scrollRight.addEventListener('click', () => {
                carousel.scrollBy({ left: 200, behavior: 'smooth' });
            });
        })
        .catch(error => console.error('Erro ao carregar as imagens do carrossel 2:', error));
}

function carregarFolhetoCarrossel_3() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_PAGES_FOLHETO_3}?key=${API_KEY}`;
const container = document.getElementById('container-carrosseis_3');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values;
            
            // Verifica se a célula U4 está vazia
            if (!rows || rows.length === 0 || !rows[0] || rows[0][0] === "") {
                container.style.display = 'none'; // Oculta o container se U4 estiver vazia
                return;
            }

            // Se U4 não está vazia, exibe o container e constrói o carrossel
            container.style.display = 'block';

            const carouselWrapper = document.createElement('div');
            carouselWrapper.classList.add('slider-folheto-loja-fisica-sn');

            const scrollLeft = document.createElement('img');
            scrollLeft.id = 'scrollLeft--carousel-position-3';
            scrollLeft.classList.add('scrollLeft');
            scrollLeft.src = 'imgs/nav-arrow-left.svg';
            scrollLeft.alt = 'Mover para esquerda';
            carouselWrapper.appendChild(scrollLeft);

            const carousel = document.createElement('div');
            carousel.id = 'sn--folheto--carousel-position-3';
            carousel.classList.add('cards-carrossel-folheto-loja-fisica-sn');
            carouselWrapper.appendChild(carousel);

            const scrollRight = document.createElement('img');
            scrollRight.id = 'scrollRight--carousel-position-3';
            scrollRight.classList.add('scrollRight');
            scrollRight.src = 'imgs/nav-arrow-right.svg';
            scrollRight.alt = 'Mover para a direita';
            carouselWrapper.appendChild(scrollRight);

            container.appendChild(carouselWrapper);

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];

                if (row.length === 0) break;

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-pagina-folheto-loja-fisica-sn');
                
                const image = document.createElement('img');
                image.classList.add('page-folheto-image');
                image.src = row[0];
                image.alt = row[1];
                image.title = row[2];
                image.loading = row[3];

                // Adicionar o evento de clique para abrir o overlay
                image.addEventListener('click', () => {
                    abrirOverlay(image.src);
                });

                imageContainer.appendChild(image);
                carousel.appendChild(imageContainer);
            }

            scrollLeft.addEventListener('click', () => {
                carousel.scrollBy({ left: -200, behavior: 'smooth' });
            });

            scrollRight.addEventListener('click', () => {
                carousel.scrollBy({ left: 200, behavior: 'smooth' });
            });
        })
        .catch(error => console.error('Erro ao carregar as imagens do carrossel 3:', error));
}

// Função para abrir o overlay com a imagem
function abrirOverlay(src) {
    const overlay = document.getElementById('image-overlay');
    const overlayImage = document.getElementById('overlay-image');
    overlayImage.src = src;
    overlay.style.display = 'flex'; // Exibe o overlay
}

// Fechar o overlay ao clicar fora da imagem ou no botão de fechar
document.getElementById('close-overlay').addEventListener('click', () => {
    const overlay = document.getElementById('image-overlay');
    overlay.style.display = 'none'; // Esconde o overlay ao clicar no botão de fechar
});

document.getElementById('image-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'image-overlay') {
        e.target.style.display = 'none'; // Esconde o overlay se o clique for fora da imagem
    }
});


// Função para carregar os dados da planilha
function carregarDadosFolheto() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_DATA}?key=${API_KEY}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados da planilha');
            }
            return response.json();
        })
        .then(data => {
            const dataInDataOut = data.values[0][0]; // Obtém o valor da célula B2
            inserirConteudo(dataInDataOut);
        })
        .catch(error => {
            console.error('Erro:', error);
        });

    // Verificar e inserir links
    verificarLinks();
}

// Função para verificar os links nas células B5, C5, D5 e adicionar ao HTML
function verificarLinks() {
    const urlLinks = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_LINKS}?key=${API_KEY}`;

    fetch(urlLinks)
        .then(response => response.json())
        .then(data => {
            const links = data.values[0]; // Array com os valores das células B5, C5 e D5
            const containerLinks = document.getElementById('row-share-file--lp-folheto-loja-AP');

            links.forEach(link => {
                if (link) { // Verifica se a célula tem conteúdo
                    // Cria o componente <a>
                    const linkElement = document.createElement('a');
                    linkElement.href = link;

                    // Cria o conteúdo do botão dentro do <a>
                    const divButton = document.createElement('div');
                    divButton.className = 'lp-folheto--btn-whatsapp--download';
                    divButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" target="_blank">
                            <path d="M8.36917 11.8693C8.27443 11.9729 8.14057 12.0319 8.00017 12.0319C7.85977 12.0319 7.7259 11.9729 7.63117 11.8693L4.96449 8.95263C4.77815 8.74883 4.79231 8.43257 4.99611 8.24623C5.19992 8.0599 5.51618 8.07403 5.70251 8.27783L7.50017 10.244V2.86523C7.50017 2.58909 7.72403 2.36523 8.00017 2.36523C8.2763 2.36523 8.50017 2.58909 8.50017 2.86523V10.244L10.2978 8.27783C10.4842 8.07403 10.8004 8.0599 11.0042 8.24623C11.208 8.43257 11.2222 8.74883 11.0358 8.95263L8.36917 11.8693Z" fill="white"/>
                            <path d="M2.5 10.8652C2.5 10.5891 2.27615 10.3652 2 10.3652C1.72386 10.3652 1.5 10.5891 1.5 10.8652V10.9018C1.49999 11.8136 1.49997 12.5484 1.57768 13.1264C1.65836 13.7265 1.83095 14.2317 2.23223 14.633C2.63351 15.0343 3.13876 15.2069 3.73883 15.2876C4.31681 15.3652 5.05169 15.3652 5.96342 15.3652H10.0366C10.9483 15.3652 11.6832 15.3652 12.2612 15.2876C12.8613 15.2069 13.3665 15.0343 13.7678 14.633C14.1691 14.2317 14.3417 13.7265 14.4223 13.1264C14.5 12.5484 14.5 11.8136 14.5 10.9018V10.8652C14.5 10.5891 14.2761 10.3652 14 10.3652C13.7239 10.3652 13.5 10.5891 13.5 10.8652C13.5 11.8222 13.4989 12.4896 13.4313 12.9932C13.3655 13.4824 13.2452 13.7414 13.0607 13.9259C12.8761 14.1104 12.6171 14.2307 12.1279 14.2965C11.6243 14.3642 10.9569 14.3652 10 14.3652H6C5.04306 14.3652 4.37565 14.3642 3.87208 14.2965C3.3829 14.2307 3.12385 14.1104 2.93934 13.9259C2.75483 13.7414 2.63453 13.4824 2.56877 12.9932C2.50106 12.4896 2.5 11.8222 2.5 10.8652Z" fill="white"/>
                        </svg>
                    `;

                    // Adiciona o botão ao link
                    linkElement.appendChild(divButton);

                    const shareElement = document.createElement('a');
                    shareElement.href = `https://api.whatsapp.com/send?text="Baixe o folheto do Apoio Entrega ${link}"`
                    shareElement.target = '_blank'
                    shareElement.style = 'justify-content: center;display: flex;'
                    const divShareButton = document.createElement('div');
                    divShareButton.className = 'lp-folheto--btn-whatsapp--download';
                    divShareButton.innerHTML = `
                        <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="78" height="31" rx="7.5" fill="#E12428"/>
                            <rect x="1" y="0.5" width="78" height="31" rx="7.5" stroke="#E12428"/>
                            <path d="M14.9863 18.6289V20H10.4453V18.6289H14.9863ZM11.0195 11.4688V20H9.26172V11.4688H11.0195ZM14.3945 14.9434V16.2793H10.4453V14.9434H14.3945ZM14.9805 11.4688V12.8457H10.4453V11.4688H14.9805ZM22.9551 11.4688V20H21.1973L17.7695 14.2812V20H16.0117V11.4688H17.7695L21.2031 17.1934V11.4688H22.9551ZM27.5605 18.2188L29.5703 11.4688H31.5273L28.5566 20H27.2676L27.5605 18.2188ZM25.709 11.4688L27.7129 18.2188L28.0176 20H26.7168L23.7637 11.4688H25.709ZM34.1934 11.4688V20H32.4414V11.4688H34.1934ZM39.4141 12.9277L37.0938 20H35.2246L38.3945 11.4688H39.584L39.4141 12.9277ZM41.3418 20L39.0156 12.9277L38.8281 11.4688H40.0293L43.2168 20H41.3418ZM41.2363 16.8242V18.2012H36.7305V16.8242H41.2363ZM44.0078 11.4688H47.1895C47.8418 11.4688 48.4023 11.5664 48.8711 11.7617C49.3438 11.957 49.707 12.2461 49.9609 12.6289C50.2148 13.0117 50.3418 13.4824 50.3418 14.041C50.3418 14.498 50.2637 14.8906 50.1074 15.2188C49.9551 15.543 49.7383 15.8145 49.457 16.0332C49.1797 16.248 48.8535 16.4199 48.4785 16.5488L47.9219 16.8418H45.1562L45.1445 15.4707H47.2012C47.5098 15.4707 47.7656 15.416 47.9688 15.3066C48.1719 15.1973 48.3242 15.0449 48.4258 14.8496C48.5312 14.6543 48.584 14.4277 48.584 14.1699C48.584 13.8965 48.5332 13.6602 48.4316 13.4609C48.3301 13.2617 48.1758 13.1094 47.9688 13.0039C47.7617 12.8984 47.502 12.8457 47.1895 12.8457H45.7656V20H44.0078V11.4688ZM48.7773 20L46.832 16.1973L48.6895 16.1855L50.6582 19.918V20H48.7773Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M65.6277 19.1362L69.9002 15.8767C70.0688 15.7512 70.1667 15.5635 70.1667 15.3652C70.1667 15.1669 70.0688 14.9793 69.9002 14.8537L65.6277 11.5942C65.3998 11.4169 65.0809 11.3735 64.8059 11.4823C64.531 11.5911 64.3483 11.8331 64.3353 12.1057V13.3913C58.3372 12.4455 56.8333 17.3313 56.8333 20.0898C58.2248 17.9884 61.8305 14.1793 64.3353 17.3313V18.6204C64.3466 18.8938 64.5286 19.1373 64.8038 19.2471C65.0792 19.357 65.3992 19.3139 65.6277 19.1362Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                    shareElement.appendChild(divShareButton)

                    // Adiciona o link ao container
                    containerLinks.appendChild(shareElement);
                    containerLinks.appendChild(linkElement);
                }
            });
        })
        .catch(error => console.error('Erro ao verificar links:', error));
}

// Função para inserir o conteúdo no HTML
function inserirConteudo(dataInDataOut) {
    const container = document.getElementById('lp-folheto-AP_DataInDataOut');

    if (container) {
        const lojaLabel = document.createElement('p');
        lojaLabel.className = 'text-lp-label-small';
        lojaLabel.textContent = 'Loja física';

        const ofertasTitulo = document.createElement('h1');
        ofertasTitulo.className = 'text-lp';
        ofertasTitulo.textContent = 'Ofertas do folheto Apoio Mineiro';

        const ofertasData = document.createElement('p');
        ofertasData.className = 'text-lp-label-small';
        ofertasData.textContent = `${dataInDataOut}`;

        // Insere os elementos no container
        container.appendChild(lojaLabel);
        container.appendChild(ofertasTitulo);
        container.appendChild(ofertasData);
    } else {
        console.error('Elemento com id "lp-folheto-AP_DataInDataOut" não encontrado');
    }
}

// Função para verificar o conteúdo da célula D9 e aplicar as ações necessárias
function verificarConteudoVideoVT() {
    const RANGE_VIDEO_VT = 'page-content!D9'; // Célula D9
    const urlVideoVT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_VIDEO_VT}?key=${API_KEY}`;
    
    fetch(urlVideoVT)
        .then(response => response.json())
        .then(data => {
            const videoVTContent = data.values ? data.values[0][0] : ''; // Pega o valor da célula D9

            const videoContainer = document.getElementById('lp-folheto-AP--block-vt-YT');
            const videoElement = document.getElementById('lp-folheto-AP_VideoVT');

            if (!videoVTContent) {
                // Se a célula estiver vazia, ocultar o elemento e zerar padding
                videoContainer.style.display = 'none';
                videoContainer.style.padding = '0';
            } else {
                // Se houver conteúdo, inserir no elemento de vídeo
                videoElement.innerHTML = videoVTContent;
            }
        })
        .catch(error => console.error('Erro ao buscar conteúdo de vídeo VT:', error));
}

// Função para verificar o conteúdo das células B14:B17 e alimentar as estruturas do HTML
function verificarConteudoCoupon() {
    const RANGE_COUPON = 'page-content!B14:B17'; // Intervalo B14:B17
    const urlCoupon = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_COUPON}?key=${API_KEY}`;
    
    fetch(urlCoupon)
        .then(response => response.json())
        .then(data => {
            const values = data.values || [];
            
            // Elementos HTML que receberão o conteúdo das células
            const titleElement = document.getElementById('lp-folheto-AP_titleCoupon');
            const subtitleElement = document.getElementById('lp-folheto-AP_subtitleCoupon');
            const firstOrderElement = document.getElementById('lp-folheto-AP_CouponFirstOrder');
            const supportingTextElement = document.getElementById('lp-folheto-AP_supporting-text');
            const clubeApoioElement = document.getElementById('lp-folheto-AP--clube-apoio');
            
            // Atribuindo valores às variáveis, considerando se existem dados
            const titleCoupon = values[0] ? values[0][0] : '';
            const subtitleCoupon = values[1] ? values[1][0] : '';
            const couponFirstOrder = values[2] ? values[2][0] : '';
            const supportingText = values[3] ? values[3][0] : '';

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
            if (!titleCoupon || !subtitleCoupon || !couponFirstOrder || !supportingText) {
                clubeApoioElement.style.display = 'none';
            }
        })
        .catch(error => console.error('Erro ao buscar dados do cupom:', error));
}

function carregarStores() {
    // Configurar a URL da API do Google Sheets
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE_STORES}?key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values;
            const container = document.getElementById('lp-folheto-AP--carousel-itens');

            // Loop através das linhas da planilha
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];

                // Verificar se a linha não está vazia
                if (row.length === 0) {
                    break; // Para se encontrar uma linha vazia
                }

                // Criar o elemento do card da loja
                const card = document.createElement('div');
                card.classList.add('avaliable-store--card');

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
        .catch(error => console.error('Erro ao carregar os dados das lojas:', error));
}

function criarCardsDeLojas() {}

