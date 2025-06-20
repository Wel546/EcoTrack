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
