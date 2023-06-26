import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import DeveloperProjects from "./components/DeveloperProjects";
import ProjectManagerProjects from "./components/ProjectManagerProjects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/developer-projects">
            <DeveloperProjects/>
          </Route>
          <Route path="/project-manager-projects">
            <ProjectManagerProjects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
