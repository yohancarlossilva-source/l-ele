// Aguarda o HTML terminar de carregar para iniciar as conexões
document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONEXÃO 1: Interatividade do Menu Responsivo ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // --- CONEXÃO 2: Mudança de Estilo (CSS) Dinâmica ao Rolando a Página ---
    // O JavaScript monitora o scroll e altera o fundo do cabeçalho diretamente no CSS
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Altera o CSS diretamente via JavaScript
            header.style.backgroundColor = '#2c5e3b'; 
            header.style.transition = 'background 0.3s ease';
            // Altera a cor dos links para branco para contrastar com o fundo verde escuro
            document.querySelectorAll('nav ul li a').forEach(link => link.style.color = '#fff');
            document.querySelector('.logo').style.color = '#fff';
        } else {
            // Volta ao estilo padrão do seu style.css original
            header.style.backgroundColor = '#ffffff';
            document.querySelectorAll('nav ul li a').forEach(link => link.style.color = '#555');
            document.querySelector('.logo').style.color = '#2c5e3b';
        }
    });

    // --- CONEXÃO 3: Captura e Validação de Dados do Formulário HTML ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão e o recarregamento da página
            
            // Conecta diretamente com os inputs do HTML para pegar o que o usuário digitou
            const nome = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const mensagem = contactForm.querySelector('textarea').value;

            // Validação simples em JavaScript
            if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
                alert('Por favor, preencha todos os campos antes de enviar.');
                return;
            }

            // Exibe uma mensagem personalizada usando os dados capturados do HTML
            alert(`Obrigado pelo contato, ${nome}! Seus dados foram conectados com sucesso. Em breve responderemos no e-mail: ${email}.`);
            
            contactForm.reset(); // Limpa os campos do formulário no HTML
        });
    }
});
