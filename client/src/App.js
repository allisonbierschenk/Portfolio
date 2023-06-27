import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import DeveloperProjects from "./components/DeveloperProjects";
import ProjectManagerProjects from "./components/ProjectManagerProjects";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/developer-projects">
            <DeveloperProjects/>
          </Route>
          <Route exact path="/project-manager-projects">
            <ProjectManagerProjects/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
