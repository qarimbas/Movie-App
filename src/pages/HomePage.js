import NavBar from "../components/NavBar/NavBar";
import React, { useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../hooks/comment-api";
import CommentList from "../components/comments/CommentList";
import { useDispatch, useSelector } from "react-redux";
import { getInTheatersDataSelector } from "../shared/store/selectors/inTheaters.selectors";
import { inTheatersActions } from "../shared/store/actions/intheatres.actions";
import HomeGridView from "../components/MovieDetail/HomeGridView";

function HomePage() {
  const dispatch = useDispatch();
  const inTheatersData = useSelector(getInTheatersDataSelector);

  useEffect(() => {
    loadInTheaters();
  }, []);

  const loadInTheaters = () => {
    dispatch(inTheatersActions.loadInTheatersAction());
  };

  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div>
        <NavBar />
        <center>
          <h1 className="text-blue-500 text-5xl font-bold">Home</h1>
        </center>
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p>No comments were found.</p>;
  }

  return (
    <div className="bg-gray-600">
      <NavBar />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Home</h1>
      </center>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col">
          <CommentList quotes={loadedQuotes} />
        </div>

        {inTheatersData.length === 0 && (
          <p className="text-blue-500">Loading Movies...</p>
        )}
        {inTheatersData.length !== 0 && (
          <div>
            <center>
              <h1 className="mt-4 text-blue-500 text-3xl font-bold">
                In Theaters
              </h1>
            </center>
            <HomeGridView inTheaters={inTheatersData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
