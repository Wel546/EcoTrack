const usuario = JSON.parse(localStorage.getItem('usuario'));
const recompensa = localStorage.getItem('recompensaColetada');

if (!usuario || !recompensa) {
    window.location.href = 'index.html';
}

document.getElementById('mensagem').innerText = `Parabéns, ${usuario.nome}! Você coletou a recompensa "${recompensa}".`;

console.log(`Simulando envio de e-mail para ${usuario.email}: Sua recompensa "${recompensa}" foi registrada.`);
