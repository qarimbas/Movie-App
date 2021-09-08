import NavBar from "../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { movieActions } from "../shared/store/actions/movie.actions";
import { actorsActions } from "../shared/store/actions/actors.actions";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import { useRouteMatch } from "react-router-dom";
import { getMovieDataSelector } from "../shared/store/selectors/movie.selectors";
import { getActorsDataSelector } from "../shared/store/selectors/actors.selectors";
import GridView from "../components/GridView";

function MovieDetailsPage() {
  let matchMovie = useRouteMatch();
  let matchActor = useRouteMatch();
  const dispatchMovie = useDispatch();
  const dispatchActors = useDispatch();
  const movieData = useSelector(getMovieDataSelector);
  const actorsData = useSelector(getActorsDataSelector);

  React.useEffect(() => {
    loadMovie();
    loadActors();
  }, [matchMovie.params.id, matchActor.params.id]);

  const loadMovie = () => {
    dispatchMovie(movieActions.loadMovieAction(matchMovie.params.id));
  };

  const loadActors = () => {
    dispatchActors(actorsActions.loadActorsAction(matchActor.params.id));
  };

  return (
    <div>
      <NavBar />
      <br />
      <MovieDetail movieDetails={movieData} />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Cast</h1>
        {actorsData.length === 0 && (
          <p className="text-blue-500">Loading Actors...</p>
        )}
        {actorsData.length !== 0 && <GridView actorsData={actorsData.actors} />}
      </center>
    </div>
  );
}

export default MovieDetailsPage;
