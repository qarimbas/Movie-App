import NavBar from "../components/NavBar/NavBar";
import GridView from "../components/GridView";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDataSelector } from "../shared/store/selectors/movie.selectors";
import React from "react";
import { movieActions } from "../shared/store/actions/movie.actions";
import { IMDB_Id } from "../shared/constants/imdb.constants";
import MovieDetail from "../components/MovieDetail/MovieDetail";

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const movieData = useSelector(getMovieDataSelector);

  React.useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = () => {
    dispatch(movieActions.loadMovieAction(IMDB_Id));
  };

  return (
    console.log(window.location.href),
    console.log(movieData),
    (
      <div>
        <NavBar />
        <br />
        <MovieDetail movieDetails={movieData} />
        <center>
          <h1 className="text-blue-500 text-5xl font-bold">Cast</h1>
          <GridView />
        </center>
      </div>
    )
  );
}

export default MovieDetailsPage;

/*
{movieData.map((item, index) => {
        return <MovieDetail key={index} movie={item} />;
      })}
 */
