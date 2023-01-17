import React, {Component} from "react";

import { Link } from "react-router-dom";


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
                                    <Link to="/" >O co chodzi?</Link>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    <Link to="/">O nas</Link>
                                        </a>
                                </li>
                                <li>
                                    <a>
                                    <Link to="/">Fundacja i organizacja</Link>
                                        </a>
                                </li>

                                <li>
                                    <a>
                                    <Link to="/">Kontakt</Link>
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


