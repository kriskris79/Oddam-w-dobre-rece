import React, {Component} from "react";

import { Link } from "react-router-dom";

class Logging extends Component {
    render () {
        return (
            <div className="row">
                <div className = "loggingButtons">
                    <button>
                        <Link to ="/logowanie" > Zaloguj </Link>
                    </button>
                    <button>
                        <Link to = "/rejestracja" > Zaloz konto</Link>
                    </button>

                </div>
            </div>
        );
    }
}
export default Logging;