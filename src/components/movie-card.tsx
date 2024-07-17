interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
  handleNavigate?: () => void;
}

const MovieCard = (props: Props) => {
  const { title, poster_path, release_date, size, handleNavigate } = props;

  return (
    <div
      className={`flex flex-col ${size} cursor-pointer`}
      onClick={handleNavigate}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        loading="lazy"
      />
      <label className=" text-base font-semibold">{title}</label>
      <p className="text-xs">{release_date}</p>
    </div>
  );
};

export default MovieCard;
