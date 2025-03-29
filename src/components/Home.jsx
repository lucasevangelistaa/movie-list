import { useState, useEffect } from "react";
import { fetchTrendingMovies, fetchMovies } from "../api/tmdb.js";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (err) {
        setError("Erro ao carregar filmes populares.");
      } finally {
        setLoading(false);
      }
    };
    loadTrendingMovies();
  }, []);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMovies(query);
      if (data.length === 0) {
        setError("Nenhum filme encontrado.");
      }
      setMovies(data);
    } catch (err) {
      setError("Erro ao buscar filmes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        🎬 Movie List
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center text-gray-500">Carregando...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
