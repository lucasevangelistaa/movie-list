const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Busca filmes populares (tendências)
export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
  if (!response.ok) {
    throw new Error('Falha ao retornar os dados da API');
  }
  const data = await response.json();
  return data.results; // Retorna apenas os filmes
};

// Busca filmes pelo nome
export const fetchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`);
  if (!response.ok) {
    throw new Error('Falha ao retornar os dados da API');
  }
  const data = await response.json();
  return data.results; // Retorna apenas os filmes
};
