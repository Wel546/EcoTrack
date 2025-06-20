// Carregar dados do usuário
const usuario = JSON.parse(localStorage.getItem('usuario'));
const pontos = localStorage.getItem('pontos') || 0;

if (!usuario) {
    window.location.href = 'index.html';
}

document.getElementById('userName').innerText = `Nome: ${usuario.nome}`;
document.getElementById('userSetor').innerText = `Setor: ${usuario.setor}`;
document.getElementById('pontuacao').innerText = pontos;
