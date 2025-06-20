document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const setor = document.getElementById('setor').value;

    if (nome === "" || setor === "" || email === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Salva no localStorage
    localStorage.setItem('usuario', JSON.stringify({ nome, setor, email }));

    // Redireciona para a página inicial
    window.location.href = 'home.html';
});
