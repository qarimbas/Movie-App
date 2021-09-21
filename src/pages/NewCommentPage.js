import NavBar from "../components/NavBar/NavBar";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./profilePage.module.css";
import CommentForm from "../components/comments/CommentForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../hooks/comment-api";

function NewCommentPage() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <div>
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Add a Comment</h1>
      </center>

      <br />
      <div className={classes.action}>
        <center>
          <CommentForm
            isLoading={status === "pending"}
            onAddQuote={addQuoteHandler}
          />
        </center>
      </div>
    </div>
  );
}

export default NewCommentPage;
