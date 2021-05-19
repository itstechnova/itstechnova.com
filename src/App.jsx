import "./App.scss";
import Landing from "./sections/Landing/Landing";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/About/About";
import Story from "./sections/Story/Story";
import SponsorUs from "./sections/Sponsor/SponsorUs";
import OurSponsors from "./sections/Sponsor/OurSponsors";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

import nav from "./resources/strings/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const routes = [
    { label: nav.title, sectionId: "landing" },
    { label: nav.about, sectionId: "about" },
    { label: nav.story, sectionId: "story" },
    { label: nav.sponsor, sectionId: "sponsor-us" },
    { label: nav.faq, sectionId: "faq" },
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
                        <NavBar routes={routes} />
                        <Landing />
                        <About />
                        <Story />
                        <SponsorUs />
                        <OurSponsors />
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
