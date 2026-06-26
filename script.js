document.addEventListener('DOMContentLoaded', () => {
    
    // Conexão 1: Menu Hamburguer Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Conexão 2: Botão de Teste do Banner (Altera o CSS via JS)
    const btnAlerta = document.getElementById('btn-alerta');
    btnAlerta.addEventListener('click', () => {
        // Alerta na tela provando que o JS está rodando
        alert("Sucesso! O arquivo script.js está conectado e funcionando!");
        
        // Altera a cor de fundo do cabeçalho diretamente para provar a conexão com o visual
        const header = document.getElementById('main-header');
        header.style.backgroundColor = '#27ae60';
        document.getElementById('logo-site').style.color = '#ffffff';
    });

    // Conexão 3: Interceptação do Formulário
    const formulario = document.getElementById('contactForm');
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Não deixa a página recarregar
        const nomeDigitado = document.getElementById('nome').value;
        alert(`Obrigado, ${nomeDigitado}! O formulário capturou seu nome com sucesso.`);
        formulario.reset();
    });
});
