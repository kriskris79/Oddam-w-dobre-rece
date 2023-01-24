

import React, {Component} from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";
// import Logging from "./Logging";
// import Login from "./Login";
// import Navigation from "./Navigation";

class Home extends Component {
    render() {
        return (
            <>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeFourSteps/>
                <HomeAboutUs/>
                <WhoWeHelp/>
                <Contact/>
                <Footer/>
                {/*<Login/>*/}
                {/*<Logging/>*/}
                {/*<Navigation/>*/}

            </>
        )
    }
}

export default Home;