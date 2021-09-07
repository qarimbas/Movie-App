import NavBar from "../components/NavBar/NavBar";
import GridView from "../components/GridView";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { movieActions } from "../shared/store/actions/movie.actions";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import { useRouteMatch } from "react-router-dom";
import { getMovieDataSelector } from "../shared/store/selectors/movie.selectors";

function MovieDetailsPage() {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  const movieData = useSelector(getMovieDataSelector);

  React.useEffect(() => {
    loadMovie();
  }, [match.params.id]);

  const loadMovie = () => {
    dispatch(movieActions.loadMovieAction(match.params.id));
  };

  return (
    <div>
      <NavBar />
      <br />
      <MovieDetail movieDetails={movieData} />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Cast</h1>
        <GridView />
      </center>
    </div>
  );
}

export default MovieDetailsPage;

/*
{movieData.map((item, index) => {
        return <MovieDetail key={index} movie={item} />;
      })}
 */
