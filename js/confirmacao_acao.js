const usuario = JSON.parse(localStorage.getItem('usuario'));
const acao = localStorage.getItem('acaoRegistrada');

if (!usuario || !acao) {
    window.location.href = 'index.html';
}

document.getElementById('mensagem').innerText = `Parabéns, ${usuario.nome}! Você registrou a ação "${acao}". Continue assim!`;

console.log(`Simulando envio de confirmação para ${usuario.email}: Ação "${acao}" registrada com sucesso.`);
