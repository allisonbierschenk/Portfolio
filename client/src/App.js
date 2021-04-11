import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  //https://stackoverflow.com/questions/17756649/disable-the-horizontal-scroll
  let scrollEventHandler = function () {
    window.scroll(0, window.pageYOffset);
  };
  window.addEventListener("scroll", scrollEventHandler, false);

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
