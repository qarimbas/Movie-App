import NOPHOTO from "../../assets/no-image.jpg";

const MovieDetail = (props) => {
  const movie = props.moviedetail;

  return (
    <div>
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Movie Details</h1>
        <br />
        <div className="mt-2 mb-2 py-16 flex justify-evenly flex-row .. bg-blue-300 text-gray-600">
          <img className="h-64 w-64 mx-10" src={NOPHOTO} />
          <div className="flex-2" />
          <div className="flex flex-col ..">
            <text className="flex-1 .. mt-8 text-3xl font-bold">
              {movie.title}
            </text>
            <text className="flex-1 .. ">
              Chronicles the experiences of a formerly successful banker as a
              prisoner in the gloomy jailhouse of Shawshank after being found
              guilty of a crime he did not commit. The film portrays the man's
              unique way of dealing with his new, torturous life; along the way
              he befriends a number of fellow prisoners, most notably a wise
              long-term inmate named Red.
            </text>
          </div>
        </div>
        <div className="mt-2 mb-2 py-4 flex justify-evenly flex-row .. bg-blue-300 text-gray-600">
          <text className="text-3xl font-bold">IMDb: 9.3/10</text>
          <text className="text-3xl font-bold">Metacritic: 80%</text>
          <text className="text-3xl font-bold">TheMovieDb: 8.7/10</text>
          <text className="text-3xl font-bold">FilmAffinity: 8.6/10</text>
        </div>
      </center>
      <div className="flex flex-row justify-evenly">
        <div className="my-2  flex justify-evenly flex-col  text-gray-600 bg-blue-300">
          <div className=" flex justify-center  text-xl font-bold bg-gray-300">
            <text>CREATORS</text>
          </div>
          <h3 className="flex justify-center  text-xl font-bold">
            DIRECTOR: Frank Darabont
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Writer: Stephen King
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Writer: Frank Darabont
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Company: Castle Rock Entertainment
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Country: USA
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Language: English
          </h3>
        </div>
        <div className="my-2 py-4 flex justify-evenly flex-col  text-gray-600 bg-blue-300">
          <div className=" flex justify-center  text-xl font-bold bg-gray-300">
            <text>INFORMATION</text>
          </div>
          <h3 className="flex justify-center  text-xl font-bold">
            Release Date: 1994-09-23
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Runtime: 2h 22mins
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Genre: Drama
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Content Rating: R (R)
          </h3>
          <h3 className="flex justify-center  text-xl font-bold">
            Awards: Top Rated Movies #1 | Nominated for 7 Oscars. Another 21
            wins & 36 nominations.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
