// QR Code download app
        // Clube Apoio
        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('popup-ca--gift-card-np');
            const overlay = document.getElementById('overlay');
            const openButtons = document.querySelectorAll('.btn-start--donwload-app--qr-code-AP--gift-card-popup, #btn-gift-card--donwload-app--qr-code-AP');
            const closeButton = document.getElementById('gift-card-np--closed-pop-up--download-app--ca');

            openButtons.forEach(button => {
                button.addEventListener('click', function(event) {
                    event.preventDefault(); // Impede o comportamento padrão do link
                    popup.style.display = 'flex';
                    overlay.style.display = 'block';
                });
            });

            closeButton.addEventListener('click', function() {
                popup.style.display = 'none';
                overlay.style.display = 'none';
            });

            overlay.addEventListener('click', function() {
                popup.style.display = 'none';
                overlay.style.display = 'none';
            });
        });