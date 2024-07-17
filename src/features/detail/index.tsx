import { useEffect, useState } from "react";

import { DetailMovie } from "../../services/movie/type";
import { getMovieId } from "../../services/movie";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<DetailMovie>();

  useEffect(() => {
    fetchMovieById();
  }, [id]);

  const fetchMovieById = async () => {
    try {
      setLoading(true);

      const response = await getMovieId(id as string);

      setMovie(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? <div>loading..</div> : <div>{movie?.title}</div>;
};

export default Detail;
