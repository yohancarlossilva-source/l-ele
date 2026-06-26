// Elementos capturados do HTML
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // 1. Controle do Menu Mobile (Abrir / Fechar)
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');  // Abre a cortina do menu
            menuToggle.classList.toggle('open');  // Transforma as barras em X
        });

        // Fecha o menu se clicar em qualquer link (essencial para usabilidade mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // 2. Animação da Navbar baseada no Scroll da tela
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled'); // Encolhe e adiciona sombra
        } else {
            navbar.classList.remove('navbar-scrolled'); // Volta ao estado original
        }
    });

    // 3. Clique nos Cards de Solução (Preparação para features futuras)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const servico = card.querySelector('h3').innerText;
            console.log(`Você clicou no serviço: ${servico}`);
            // Espaço reservado para abrir modais ou carregar dados dinamicamente
        });
    });

});
