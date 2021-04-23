//IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from './pages/ProjectDetail';

//IMPORT STYLES
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";

//IMPORT ROUTER
import {Switch, Route, useLocation} from 'react-router-dom';

//ANIMATION
import {AnimatePresence} from 'framer-motion';

//SCROLL UP THE PAGE EVERYTIME YOU LOAD A NEW ONE
import ScrollTop from './components/ScrollTop';
import Roadmap from "./pages/Roadmap";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <ScrollTop/>
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/roadmap" exact>
          <Roadmap />
        </Route>
        <Route path="/portfolio/:id">
          <ProjectDetail/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
