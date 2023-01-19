import React, {Component} from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const options = {
    duration: 700,
    activeClass: "active"
};


class Navigation extends Component {
    render() {
        return (
            <section className="navigation">
                <div className="row">
                    <div className="col-10">
                        <nav>
                            <ul>
                                <li>
                                    <a>
                                    <Link to="/">Start</Link>
                                    </a>
                                </li>
                                <li>
<a>
                                        <ScrollLink to="fourSteps" {...options}>
                                            O co chodzi?
                                        </ScrollLink>
</a>
                                </li>
                                <li>
                                    <a>
                                        <ScrollLink to="aboutUs" {...options}>
                                            O nas
                                        </ScrollLink>
                                        </a>
                                </li>
                                <li>
                                    <a>
                                        <ScrollLink to="whoWeHelp" {...options}>
                                            Fundacja i organizacje
                                        </ScrollLink>
                                        </a>
                                </li>

                                <li>
                                    <a>
                                        <ScrollLink to="contact" {...options}>
                                            Kontakt
                                        </ScrollLink>
                                        </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}

export default Navigation;


