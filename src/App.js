import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/404";
import Top250Movies from "./pages/Top250Movies";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/top250" component={Top250Movies} />
        <Route path="/moviedetails" component={MovieDetailsPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
