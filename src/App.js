import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./pages";

function App() {
  return (
    <main>
      <Provider store={store}>
        <Pages />
      </Provider>
    </main>
  );
}

export default App;
