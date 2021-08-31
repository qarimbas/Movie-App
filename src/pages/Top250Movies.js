import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import ListItem from "../components/ListItem/ListItem";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from '../shared/store/actions/movies.actions';
import {IMDB_Id} from "../shared/constants/imdb.constants";
import {getMoviesDataSelector} from "../shared/store/selectors/movies.selectors";

const Top250Movies = () => {
    const dispatch = useDispatch();
    const moviesData = useSelector(getMoviesDataSelector);

    React.useEffect(() => {
        loadMovie();
    }, []);

    const loadMovie = () => {
        dispatch(moviesActions.loadMoviesAction(IMDB_Id))
    }

  return (
    <div>
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Top 250 Movies</h1>

        <div className="my-5 py-3 flex justify-center flex-row  bg-blue-300">
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">RANK</h3>
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">TITLE</h3>
          <h3 className="flex-1 ... text-blue-500 text-xl font-bold">RATE</h3>
        </div>
          {
              moviesData.map((item, index) => {
                  return (<ListItem key={index} movie={item} />)
              })
          }
      </center>
    </div>
  );
}

export default Top250Movies;
