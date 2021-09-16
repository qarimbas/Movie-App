import NavBar from "../components/NavBar/NavBar";
import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../shared/store/auth-context";
import classes from "./profilePage.module.css";

function ProfilePage() {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //add validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAcszqpMMoiYkWlpT4JKD95ACiVkcJi7ws",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //assume success always

      history.replace("/");
    });
  };

  return (
    <div>
      <NavBar />
      <br />
      <center>
        <h1 className="text-blue-500 text-5xl font-bold">Your Profile</h1>
      </center>
      <br />
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            minLength="7"
            ref={newPasswordInputRef}
          />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
