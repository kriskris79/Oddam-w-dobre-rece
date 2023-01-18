

import React, {Component} from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs";
import WhoWeHelp from "./WhoWeHelp";
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
                {/*<Logging/>*/}
                {/*<Navigation/>*/}

            </>
        )
    }
}

export default Home;