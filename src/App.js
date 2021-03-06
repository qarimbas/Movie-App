import React, { useContext } from "react";
import AuthContext from "./shared/store/auth-context";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
//Pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404";
import Top250Movies from "./pages/Top250Movies";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { store } from "./shared/store";
import AuthPage from "./pages/AuthPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ProfilePage from "./pages/ProfilePage";
import NamePage from "./pages/NamePage";
import NewCommentPage from "./pages/NewCommentPage";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/top250/" component={Top250Movies} />
          <Route path="/moviedetails/:id" component={MovieDetailsPage} />
          <Route path="/actordetails/:id" component={NamePage} />
          <Route path="/comingsoon/" component={ComingSoonPage} />

          {!authCtx.isLoggedIn && <Route path="/auth/" component={AuthPage} />}
          {authCtx.isLoggedIn && (
            <Route path="/new-comment" component={NewCommentPage} />
          )}
          <Route path="/profile/" component={ProfilePage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
