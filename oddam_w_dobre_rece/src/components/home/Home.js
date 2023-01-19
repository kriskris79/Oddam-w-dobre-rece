

import React, {Component} from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
// import Logging from "./Logging";
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
                {/*<Logging/>*/}
                {/*<Navigation/>*/}

            </>
        )
    }
}

export default Home;