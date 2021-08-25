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
import AnotherPage from "./pages/AnotherPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/another" component={AnotherPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
