import React from "react";

function App() {
  // Requisição para a API do TMDB1
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  const fetchMovies = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`); // Fazendo a requisição para a API
    if (!response.ok) {
      throw new Error("Falha ao retornar os dados da API");
    }
    return response.json();
  };

  const [movies, setMovies] = React.useState([]); // Estado para armazenar os filmes
  const [loading, setLoading] = React.useState(true); // Estado para controlar o loading

  React.useEffect(() => {
    fetchMovies("/movie/popular")
      .then((data) => {
        setMovies(data.results); // Armazenando os filmes no estado
        setLoading(false); // Desativando o loading
      })
      .catch((error) => console.error(error)); // Tratando o erro
  }, []);

  return (
    <div className="bg-gray-400 min-h-screen p-4">
      <h1 className="text-center text-4xl font-bold">Filmes Populares</h1>
      {loading ? (
        <p className="text-2xl">Carregando...</p>
      ) : (
        <ul type="circle" className="mt-4 space-y-2">
          {movies.map((movie) => (
            <li key={movie.id}> 
                <p>🎬 Título: {movie.title}</p>
                <p>📖 Sinopse: {movie.overview}</p>
                <p>📅 Ano de Lançamento: {movie.release_date.split('-')[0]}</p>
                <p>⭐ Nota: {movie.vote_average}({movie.vote_count} votos)</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
