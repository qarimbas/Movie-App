import React from "react";

const MovieDetail = (props) => {
  const movie = props.movieDetails;

  return (
    <div>
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Movie Details</h1>
        <br />
        <div className="mt-2 mb-2 py-16 flex justify-evenly flex-row .. bg-blue-300 text-gray-600">
          <img className="h-64 w-64 mx-10" src={movie.image} />
          <div className="flex-2" />
          <div className="flex flex-col ..">
            <text className="flex-1 .. mt-8 text-3xl font-bold">
              {movie.title}
            </text>
            <text className="flex-1 .. ">{movie.plot}</text>
          </div>
        </div>
        <div className="mt-2 mb-2 py-4 flex justify-evenly flex-row .. bg-blue-300 text-gray-600">
          <text className="text-3xl font-bold">
            IMDb: {movie.imDbRating}/10
          </text>
          <text className="text-3xl font-bold">
            Metacritic: {movie.metacriticRating}%
          </text>
        </div>
      </center>
      <div className="flex flex-row justify-evenly">
        <div className="my-2  flex justify-evenly flex-col  text-gray-600 bg-blue-300">
          <div className=" flex justify-center  text-xl font-bold bg-gray-300">
            <text>CREATORS</text>
          </div>
          <h3 className="flex justify-center  text-xl font-bold">
            DIRECTOR: {movie.directors}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Writer: {movie.writers}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Company: {movie.companies}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Country: {movie.countries}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Language: {movie.languages}
          </h3>
        </div>
        <div className="my-2 py-4 flex justify-evenly flex-col  text-gray-600 bg-blue-300">
          <div className=" flex justify-center  text-xl font-bold bg-gray-300">
            <text>INFORMATION</text>
          </div>
          <h3 className="flex justify-center  text-xl font-bold">
            Release Date: {movie.releaseDate}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Runtime: {movie.runtimeStr}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Genre: {movie.genres}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Content Rating: {movie.contentRating}
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Awards: {movie.awards}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
