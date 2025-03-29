// Requisição para a API do TMDB1

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`); // Fazendo a requisição para a API
  if (!response.ok) {
    throw new Error('Falha ao retornar os dados da API');
  }
  return response.json();
}
