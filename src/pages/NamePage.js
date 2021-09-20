import NavBar from "../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import { nameActions } from "../shared/store/actions/name.actions";
import { getNameDataSelector } from "../shared/store/selectors/name.selectors";
import ActorDetails from "../components/NamePage/ActorDetails";
import PlayedMoviesGridView from "../components/NamePage/PlayedMoviesGridView";

function MovieDetailsPage() {
  let matchName = useRouteMatch();
  const dispatchName = useDispatch();
  const nameData = useSelector(getNameDataSelector);

  React.useEffect(() => {
    loadName();
  }, [matchName.params.id]);

  const loadName = () => {
    dispatchName(nameActions.loadNameAction(matchName.params.id));
  };

  console.log("nameData: ", nameData);

  return (
    <div>
      <NavBar />
      <br />
      {nameData.length === 0 && (
        <center>
          <h2 className="text-blue-500 text-5xl font-bold">
            Loading Actor Details
          </h2>
        </center>
      )}
      {nameData.length !== 0 && (
        <center>
          <h1 className="text-blue-500 text-5xl font-bold">{nameData.name}</h1>
          <ActorDetails actorDetails={nameData} />
          <PlayedMoviesGridView actorDetails={nameData} />
        </center>
      )}
    </div>
  );
}

export default MovieDetailsPage;
