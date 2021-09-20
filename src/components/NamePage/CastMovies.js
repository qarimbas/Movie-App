import React from "react";

const CastMovies = (props) => {
  const castMovies = props.actorDetails.castMovies;
  return (
    <div className="bg-white">
      <h1 className="mt-10 text-blue-500 text-3xl font-bold">Cast Movies</h1>

      <div className="my-5 py-3 flex justify-center flex-row  bg-blue-300">
        <h3 className="flex-1 ... text-blue-500 text-xl font-bold">TITLE</h3>
        <h3 className="flex-1 ... text-blue-500 text-xl font-bold">ROLE</h3>
        <h3 className="flex-1 ... text-blue-500 text-xl font-bold">
          DESCRIPTION
        </h3>
      </div>

      {castMovies.map((castmovie) => (
        <a
          key={castmovie.id}
          onClick={(event) =>
            (window.location.href = `/moviedetails/${castmovie.id}`)
          }
          className="group"
        >
          <div className="mx-16 my-2 flex justify-evenly flex-row  text-gray-600 bg-blue-300 rounded-xl">
            <div className="my-2  flex justify-evenly flex-col  text-gray-600 bg-blue-300 hover:bg-blue-400 rounded-xl">
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
      ))}
    </div>
  );
};
export default CastMovies;
