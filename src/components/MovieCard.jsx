const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=Sem+Imagem"
        }
        alt={movie.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-300">
          {movie.release_date
            ? movie.release_date.split("-")[0]
            : "Data desconhecida"}
        </p>
        <p className="text-sm text-gray-400 mt-2">
          {movie.overview
            ? movie.overview.substring(0, 100) + "..."
            : "Sinopse indisponível."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
