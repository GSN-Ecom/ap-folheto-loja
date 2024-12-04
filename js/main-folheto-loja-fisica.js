// Carrossel Clube Certo + Nosso Pay
				const scrollRightFolhetoLojaFisicaSN = document.getElementById('scrollRightFolhetoLojaFisicaSN');
				const scrollLeftFolhetoLojaFisicaSN = document.getElementById('scrollLeftFolhetoLojaFisicaSN');
				const carrosselFolhetoLojaFisicaSN = document.querySelector('.cards-carrossel-folheto-loja-fisica-sn');

				scrollRightFolhetoLojaFisicaSN.addEventListener('click', () => {
				  carrosselFolhetoLojaFisicaSN.scrollBy({ left: 300, behavior: 'smooth' });
				});

				scrollLeftFolhetoLojaFisicaSN.addEventListener('click', () => {
				  carrosselFolhetoLojaFisicaSN.scrollBy({ left: -300, behavior: 'smooth' });
				});

				function autoScrollFolhetoLojaFisicaSN() {
				  carrosselFolhetoLojaFisicaSN.scrollBy({ left: 300, behavior: 'smooth' });
				}

				setInterval(autoScrollFolhetoLojaFisicaSN, 12000);