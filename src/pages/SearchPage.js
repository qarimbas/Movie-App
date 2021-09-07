import NavBar from "../components/NavBar/NavBar";
import Search from "../components/Search/Search";
import React from "react";
import ListItem from "../components/ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDataSelector } from "../shared/store/selectors/movies.selectors";
import { moviesActions } from "../shared/store/actions/movies.actions";
import { IMDB_Id } from "../shared/constants/imdb.constants";

function SearchPage() {
  const dispatch = useDispatch();
  const moviesData = useSelector(getMoviesDataSelector);

  React.useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = () => {
    dispatch(moviesActions.loadMoviesAction(IMDB_Id));
  };

  return (
    <div>
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Search</h1>
      </center>
      <br />
      <Search />
      {moviesData.map((item, index) => {
        return <ListItem key={index} moviedata={item} />;
      })}
    </div>
  );
}

export default SearchPage;
