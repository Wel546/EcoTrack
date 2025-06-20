const form = document.getElementById('formAcoes');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const pontosSelecionados = parseInt(document.getElementById('acao').value);
    const textoSelecionado = document.getElementById('acao').selectedOptions[0].textContent;
    let pontosAtuais = parseInt(localStorage.getItem('pontos')) || 0;

    pontosAtuais += pontosSelecionados;

    localStorage.setItem('pontos', pontosAtuais);

    // Salva o nome da ação temporariamente
    localStorage.setItem('acaoRegistrada', textoSelecionado);

    // Redireciona para a página de confirmação
    window.location.href = 'confirmacao_acao.html';
});

emailjs.send("service_rebwhpw", "template_ez1bwu9", {
    to_name: usuario.nome,
    to_email: usuario.email,
    message: "Parabéns! Você resgatou a recompensa " + recompensa
}).then(() => {
    console.log('E-mail enviado com sucesso!');
}, (error) => {
    console.log('Erro ao enviar e-mail:', error);
});
