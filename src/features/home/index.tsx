import { Movie } from "../../services/movie/type";
import MovieCard from "../../components/movie-card";
import { useMovieList } from "./hooks/useMovieList";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

const Home = () => {
  const navigate = useNavigate();

  const { loading, nowPlayingData } = useMovieList();

  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;

  const handlePage = () => {
    // setPage((prev) => prev + 1);
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const toDetailMovie = (id: number) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="flex flex-col p-5">
      <label className="text-2xl font-semibold mb-5">Now Playing</label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {nowPlayingData?.results.map((item: Movie) => (
            <MovieCard
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              size="w-36"
              handleNavigate={() => toDetailMovie(item.id)}
            />
          ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}

      <div className="flex flex-row justify-between">
        <button className="bg-green-600 p-2 rounded-sm">Back</button>
        <button onClick={handlePage} className="bg-green-600 p-2 rounded-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
