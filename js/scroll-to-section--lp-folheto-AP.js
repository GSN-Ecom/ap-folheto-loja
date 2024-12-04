// Aguarda o carregamento completo do conteúdo da página
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links dentro do nav que possuem o atributo data-target
    const navLinks = document.querySelectorAll('a[data-target]');

    // Adiciona um ouvinte de evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Evita o comportamento padrão do link
            e.preventDefault();

            // Obtém o valor do atributo data-target do link clicado
            const targetId = this.getAttribute('data-target');

            // Seleciona o elemento correspondente ao id
            const targetElement = document.getElementById(targetId);

            // Se o elemento alvo existir, faz o scroll suave até ele
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Faz o scroll suave
                    block: 'start'      // Alinha ao topo
                });
            }
        });
    });
});
