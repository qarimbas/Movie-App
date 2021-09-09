import React from "react";
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
import UsersPage from "./pages/SearchPage";
import { store } from "./shared/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/top250/" component={Top250Movies} />
          <Route path="/moviedetails/:id" component={MovieDetailsPage} />
          <Route path="/users/" component={UsersPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
