import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import Header from "./components/layout/Header";
import Routes from "./routes";
import { store } from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
