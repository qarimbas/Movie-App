import NavBar from "../components/NavBar/NavBar";
import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../shared/store/auth-context";
import classes from "./authPage.module.css";

function AuthPage() {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcszqpMMoiYkWlpT4JKD95ACiVkcJi7ws";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcszqpMMoiYkWlpT4JKD95ACiVkcJi7ws";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="bg-gray-600">
      <NavBar />
      <br />
      <center>
        {isLogin ? (
          <h1 className="text-blue-500 text-5xl font-bold">Log In</h1>
        ) : (
          <h1 className="text-blue-500 text-5xl font-bold">Sign Up</h1>
        )}
      </center>
      <br />
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default AuthPage;
