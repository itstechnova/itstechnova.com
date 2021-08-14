import "./App.scss";
import Landing from "./sections/Landing/Landing";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/About/About";
import Story from "./sections/Story/Story";
import SponsorUs from "./sections/Sponsor/SponsorUs";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";
import Keynote from "./sections/Keynote/Keynote";
import Judges from "./sections/Judges/Judges";
import Footer from "./sections/Footer/Footer";
import logo from "./resources/images/logo/logo.png";

import nav from "./resources/strings/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const logoRoute = { logoSrc: logo, sectionId: "landing" };
const routes = [
    { label: nav.about, sectionId: "about" },
    { label: nav.sponsor, sectionId: "sponsor" },
    { label: nav.keynote, sectionId: "keynote" },
    { label: nav.judges, sectionId: "judges" },
    { label: nav.faq, sectionId: "faq" },
    { label: nav.contact, sectionId: "contact" },
];

// PDF locations in public folder
const SponsorPackage = `${process.env.PUBLIC_URL}/pdfs/sponsorship_package.pdf`;

// PDF locations in public folder
//const SponsorPackage = `${process.env.PUBLIC_URL}/pdfs/sponsorship_package.pdf`;

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    // Redirect itstechnova.org/sponsorship-package to pdf location
                    path="/sponsorship-package"
                    component={() => {
                        window.location.href = SponsorPackage;
                        return null;
                    }}
                />
                <Route exact path="/">
                    <div className="App">
                        <NavBar routes={routes} logoRoute={logoRoute} />
                        <Landing />
                        <About />
                        <Story />
                        <SponsorUs />
                        <Keynote />
                        <Judges />
                        <FAQ />
                        <Contact />
                        <Footer />
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
