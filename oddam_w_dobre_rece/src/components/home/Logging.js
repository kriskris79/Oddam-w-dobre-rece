import React, {Component} from "react";

import { Link } from "react-router-dom";

class Logging extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-10">
                <div className = "loggingButtons col-5">
                    <button>
                        <li><Link className='link' to="/login">Zaloguj się</Link></li>

                        {/*<Link to ="/logowanie" > Zaloguj </Link>*/}
                    </button>
                    <button>
                        {/*<Link to = "/rejestracja" > Zaloz konto</Link>*/}
                        <li><Link className='link register' to="/register">Załóż konto</Link></li>
                    </button>

                </div>
                    <div className="col-1"></div>
            </div>
            </div>
        );
    }
}
export default Logging;