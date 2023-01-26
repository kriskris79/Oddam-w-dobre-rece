import React, {Component} from "react";
// import ReactDOM from "react-dom";
import decoration from "../../assets/Decoration.svg";
import {
    Link,
} from 'react-router-dom';


class Login extends Component {
    state = {
        isEmailProper: true,
        isPasswordProper: true,
        email: '',
        password: '',
        error: null
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { isEmailProper, isPasswordProper, email, password, error} = this.state;
        let emailVaild = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)!==null ? true : false;
        let passwordValid = this.state.password.length>=6 ? true : false;
        this.setState({
            isEmailProper: emailVaild,
            isPasswordProper: passwordValid
        });
        if(isEmailProper && isPasswordProper){
            this.props.firebase
                .doSignInWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState({ email, password});
                    this.props.history.push('/');
                })
                .catch(error => {
                    this.setState({ error });
                    alert("Nieprawidłowe dane logowania");
                });
        }

    };

    render() {
        const {isEmailProper, isPasswordProper, email, password} = this.state;
        return (
            <section className='login flex-box'>
                <div className='loginForm flex-box'>
                    <h1>Zaloguj się</h1>
                    <img src={decoration}></img>
                    <form onSubmit={this.handleSubmit}>
                        <div className='labels flex-box'>
                            <div>
                                <label id="email">Email<br/>
                                    <input type="email" name="email" value={email} onChange={this.handleChange}/>
                                </label>
                                <p className={isEmailProper ? 'hide' : ''}>Podany email jest nieprawidłowy!</p>
                                <label id="password">Hasło<br/>
                                    <input type="password" name="password" value={password} onChange={this.handleChange}/>
                                </label>
                                <p className={isPasswordProper ? 'hide' : ''}>Podane hasło jest za krótkie!</p>
                            </div>
                        </div>
                        <button><Link to="/register" className='register'>Załóż konto</Link></button>
                        <button><Link to="/logging" className='logging'>Zaloguj sie</Link></button>
                    </form>
                </div>
            </section>
        );
    }

}

export default Login;