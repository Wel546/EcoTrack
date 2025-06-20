const usuario = JSON.parse(localStorage.getItem('usuario'));
let pontos = parseInt(localStorage.getItem('pontos')) || 0;

if (!usuario) {
    window.location.href = 'index.html';
}

// Seleciona todos os botões de coletar
const botoes = document.querySelectorAll('.btn-coletar');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.closest('.card');
        const custo = parseInt(card.getAttribute('data-pontos'));
        const nomeRecompensa = card.getAttribute('data-nome');

        if (pontos >= custo) {
            // Desconta pontos
            pontos -= custo;
            localStorage.setItem('pontos', pontos);

            // Armazena temporariamente a recompensa coletada
            localStorage.setItem('recompensaColetada', nomeRecompensa);

            // Simula envio de e-mail (console)
            console.log(`E-mail enviado para ${usuario.email}: Você resgatou a recompensa "${nomeRecompensa}".`);

            // Redireciona para a tela de confirmação
            window.location.href = 'confirmacao.html';
        } else {
            // Redireciona para a tela de erro por pontos insuficientes
            window.location.href = 'erro_recompensa.html';
        }
    });
});
