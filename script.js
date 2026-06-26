// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Responsivo (Hambúrguer)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link (útil para mobile)
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 2. Envio do Formulário de Contato (Simulação)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede a página de recarregar
            
            // Aqui você processaria os dados (via API ou Email)
            alert('Obrigado pelo contato! Nossa equipe responderá em breve.');
            contactForm.reset(); // Limpa os campos
        });
    }
});

