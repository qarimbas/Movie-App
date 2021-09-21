import NavBar from "../components/NavBar/NavBar";
import React, { useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../hooks/comment-api";
import CommentList from "../components/comments/CommentList";

function HomePage() {
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
    <div>
      <NavBar />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Home</h1>
      </center>
      <CommentList quotes={loadedQuotes} />
    </div>
  );
}

export default HomePage;
