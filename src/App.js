//IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from './pages/ProjectDetail';

//IMPORT STYLES
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

//IMPORT ROUTER
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/portfolio/:id">
          <ProjectDetail/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
