const ListItem = (props) => {
  const movie = props.moviedata;
  return (
    <div
      onClick={(event) => (
        (window.location.href = `/moviedetails/${movie.id}`),
        console.log(movie.id + " selected")
      )}
      className="mt-2 mb-2 flex justify-center flex-row .. bg-gray-600 text-blue-500 hover:bg-gray-500 rounded-xl mx-4"
    >
      <text className="flex-1 mt-16 text-3xl font-bold">{movie.rank}</text>
      <img className="h-48 w-48 mx-10" src={movie.image} />
      <div class="flex-2" />
      <div className="flex flex-col ..">
        <text className="flex-1 .. mt-8 text-xl font-bold">{movie.title}</text>
        <text className="flex-1 .. ">{movie.crew}</text>
      </div>
      <text className="flex-1 mt-16 text-3xl font-bold ">
        {movie.imDbRating}
      </text>
    </div>
  );
};

export default ListItem;
