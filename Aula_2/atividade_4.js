const filmes = [
  {
    titulo: "Interestelar",
    genero: "Ficção",
    nota: 9.5,
    disponivel: true
  },
  {
    titulo: "Toy Story",
    genero: "Animação",
    nota: 8.7,
    disponivel: true
  },
  {
    titulo: "Velozes e Furiosos",
    genero: "Ação",
    nota: 7.2,
    disponivel: false
  },
  {
    titulo: "O Poderoso Chefão",
    genero: "Drama",
    nota: 9.8,
    disponivel: true
  },
  {
    titulo: "Divertida Mente",
    genero: "Animação",
    nota: 8.9,
    disponivel: false
  }
];

const filmesDisponiveis = filmes.filter((filme) => filme.disponivel == true);
console.log('Filmes disponíveis: ', filmesDisponiveis);

const filmesMuitoBons = filmes.filter((filme) => filme.nota >= 9);
console.log('Filmes com nota igual ou maior que 9: ', filmesMuitoBons);

const filmesAcao = filmes.filter((filme) => filme.genero == 'Ação');
console.log('Filmes de ação: ', filmesAcao);