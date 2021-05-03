import "./App.scss";
import Landing from "./sections/Landing/Landing";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/About/About";
import nav from "./resources/strings/nav";

const routes = [
  { label: nav.title, sectionId: "landing" },
  { label: nav.about, sectionId: "about" },
];

const App = () => {
  return (
    <div className="App">
      {/*<NavBar routes={routes} />*/}
      <Landing />
      {/*<About />*/}
    </div>
  );
};

export default App;
