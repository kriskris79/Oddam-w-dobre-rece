import React, {Component} from "react";

import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Logging from "./Logging";

const HomeHeader = () => {
    return (
        <section className="header">
            <div className="row">
                <div className="col-6 headerImage"></div>
                <div className="col-10">
                    <Logging />
                    <Navigation />
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="headerMain col-9">
                            <div className="row">
                                <div className="headerHeadline col-16">
                                    <h1>Zacznij pomagać!</h1>
                                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                                </div>

                                <div className="col-4"></div>

                                <div className="decorationImage1 col-8"></div>
                                <div className="col-4"></div>

                                <div className="headerButtons col-16">
                                    <button>
                                        <Link to="/logowanie">Oddaj rzeczy</Link>
                                    </button>
                                    <button>
                                        <Link to="/logowanie">Zorganizuj zbiórkę</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        </section>
    )};

export default HomeHeader;