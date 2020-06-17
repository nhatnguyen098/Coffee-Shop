import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import configStore from "../../redux/configStore";
import { mapRouteMenu } from "../../commons/routeMenu";
import { NavbarMenu } from "../../constants/routes";
import ScrollBtn from "../../components/atoms/scrollBtn";
import Layout from "../../commons/layout";

const store = configStore();
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout className="App">
          <Switch>{mapRouteMenu(NavbarMenu)}</Switch>
          <ToastContainer position="top-right" />
        </Layout>
      </Router>
      <ScrollBtn />
    </Provider>
  );
};

export default App;
