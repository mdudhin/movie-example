import { DetailMovie, ResponseMovie } from "./type";

import { API } from "..";

const getNowPlaying = async (page: string) => {
  try {
    const response = await API.get(
      `/movie/now_playing?language=en-US&page=${page}`
    );

    console.log(response);

    return response.data as ResponseMovie;
  } catch (error) {
    console.log(error);
  }
};

const getMovieId = async (id: string) => {
  try {
    const response = await API.get(`/movie/${id}`);

    console.log(response);

    return response.data as DetailMovie;
  } catch (error) {
    console.log(error);
  }
};

export { getNowPlaying, getMovieId };
