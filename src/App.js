import { Switch, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import TodoList from "./components/TodoList";
import DemoCSS from "./components/DemoCSS/DemoCSS";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/demoCSS"} component={DemoCSS} />
        <Route path="*" component={TodoList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
