// Usuário atual
const usuario = JSON.parse(localStorage.getItem('usuario'));
const pontos = parseInt(localStorage.getItem('pontos')) || 0;

// Dados fictícios + usuário atual
const ranking = [
    { nome: "Ana", setor: "Setor A", pontos: 80 },
    { nome: "Carlos", setor: "Setor B", pontos: 65 },
    { nome: "Fernanda", setor: "Setor C", pontos: 90 },
];

// Adiciona o usuário atual ao ranking (evita duplicar)
const existente = ranking.find(u => u.nome === usuario.nome && u.setor === usuario.setor);
if (existente) {
    existente.pontos = pontos;
} else {
    ranking.push({ nome: usuario.nome, setor: usuario.setor, pontos: pontos });
}

// Ordena por pontos decrescente
ranking.sort((a, b) => b.pontos - a.pontos);

// Renderiza a lista de ranking com medalhas
const lista = document.getElementById('listaRanking');
ranking.forEach((item, index) => {
    const li = document.createElement('li');

    let medalha = '';
    if (index === 0) medalha = '🥇 ';
    else if (index === 1) medalha = '🥈 ';
    else if (index === 2) medalha = '🥉 ';

    li.textContent = `${medalha}${item.nome} (${item.setor}) - ${item.pontos} pontos`;
    lista.appendChild(li);
});

// Gera o gráfico
const nomes = ranking.map(item => item.nome);
const pontuacoes = ranking.map(item => item.pontos);

const ctx = document.getElementById('graficoRanking').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nomes,
        datasets: [{
            label: 'Pontos',
            data: pontuacoes,
            backgroundColor: '#34d6a3',
            borderRadius: 8,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.parsed.y} pontos`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        }
    }
});
