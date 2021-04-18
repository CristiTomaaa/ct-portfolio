//IMPORT PAGES
import AboutUs from "./pages/AboutUs";
//IMPORT STYLES
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <GlobalStyles />
    </div>
  );
}

export default App;
