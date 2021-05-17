import "./App.scss";
import Landing from "./sections/Landing/Landing";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/About/About";
import nav from "./resources/strings/nav";
import { BrowserRouter } from 'react-router-dom';

const routes = [
    { label: nav.title, sectionId: "landing" },
    { label: nav.about, sectionId: "about" },
];


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar routes={routes} />
                <Landing />
                <About />
            </div>
        </BrowserRouter>

    );
};

export default App;
