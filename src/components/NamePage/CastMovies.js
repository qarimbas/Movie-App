import React, { useState } from "react";

const CastMovies = (props) => {
  const castMovies = props.actorDetails.castMovies;

  const [castMoviesNumber, setCastMoviesNumber] = useState(4);
  const [showLess, setShowLess] = useState(true);

  const showMoreHandler = () => {
    setCastMoviesNumber(castMovies.length);
    setShowLess(false);
  };

  const showLessHandler = () => {
    setCastMoviesNumber(4);
    setShowLess(true);
  };

  return (
    <div className="bg-gray-700">
      <h1 className="mt-10 text-blue-500 text-3xl font-bold">Cast Movies</h1>

      <div className="my-5 py-3 flex justify-center flex-row  text-blue-300 bg-gray-600">
        <h3 className="flex-1 ... text-blue-500 text-xl font-bold">TITLE</h3>
        <h3 className="flex-1 ... text-blue-500 text-xl font-bold">ROLE</h3>
        <h3 className="flex-1 ... text-blue-500 text-xl font-bold">
          DESCRIPTION
        </h3>
      </div>

      {castMovies
        .map((castmovie) => (
          <a
            key={castmovie.id}
            onClick={(event) =>
              (window.location.href = `/moviedetails/${castmovie.id}`)
            }
            className="group"
          >
            <div className="mx-16 my-2 flex justify-evenly flex-row bg-gray-600 rounded-xl">
              <div className="my-2  flex justify-evenly flex-col  text-blue-300 bg-gray-600 hover:bg-gray-500 rounded-xl">
                <h3 className="flex-1 justify-center  text-xl font-bold">
                  Title: {castmovie.title}
                </h3>

                <h3 className="flex-1 justify-center  text-xl font-bold">
                  Role: {castmovie.role}
                </h3>
                <h3 className="flex-3 justify-center  text-xl font-bold">
                  Description: {castmovie.description}
                </h3>
              </div>
            </div>
          </a>
        ))
        .slice(0, castMoviesNumber)}
      {showLess && (
        <button
          className="bg-gray-600 text-blue-300 hover:bg-blue-400 rounded-xl px-4 py-2"
          onClick={showMoreHandler}
        >
          Show More
        </button>
      )}
      {!showLess && (
        <button
          className="bg-gray-600 text-blue-300 hover:bg-blue-400 rounded-xl px-4 py-2"
          onClick={showLessHandler}
        >
          Show Less
        </button>
      )}
    </div>
  );
};
export default CastMovies;
