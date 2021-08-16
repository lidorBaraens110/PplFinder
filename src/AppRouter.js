import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorite } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { Provider } from 'react-redux';
import { store } from './redux';
import UserModal from "components/UserModal/UserModal";

const AppRouter = () => {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <UserModal />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorite" component={Favorite} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default AppRouter;
