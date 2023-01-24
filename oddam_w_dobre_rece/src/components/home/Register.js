import {database} from '../../firebase';
import {ref,push,child,update} from "firebase/database";

import React, {Component} from "react";
import ReactDOM from "react-dom";
import decoration from "../../assets/Decoration.svg";
import {
    Link,
} from 'react-router-dom';




class Register extends Component {
    state = {
        isEmailProper: true,
        isPasswordProper: true,
        isPasswordRepeatProper: true,
        email: '',
        password: '',
        passwordRepeat: '',
        error: null
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const {isEmailProper, isPasswordProper, isPasswordRepeatProper, email, password, passwordRepeat, error} = this.state;
        let emailVaild = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null ? true : false;
        let passwordValid = this.state.password.length >= 6 ? true : false;
        let passwordsMatch = this.state.password.localeCompare(this.state.passwordRepeat)==0 ? true : false;
        this.setState({
            isEmailProper: emailVaild,
            isPasswordProper: passwordValid,
            isPasswordRepeatProper: passwordsMatch
        });
        if(isEmailProper && isPasswordProper && isPasswordRepeatProper){
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({ email, password});
                    this.props.history.push('/');
                })
                .catch(error => {
                    this.setState({ error });
                });
        }
        console.log(error);
    };

    render() {
        const {isEmailProper, isPasswordProper, isPasswordRepeatProper, email, password, passwordRepeat} = this.state;
        return (
            <section className='register flex-box'>
                <div className='registerForm flex-box'>
                    <h1>Załóż konto</h1>
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
                                <label id="passwordRepeat">Powtórz hasło<br/>
                                    <input type="password" name="passwordRepeat" value={passwordRepeat} onChange={this.handleChange}/>
                                </label>
                                <p className={isPasswordRepeatProper ? 'hide' : ''}>Podane hasła są różne</p>
                            </div>
                        </div>
                        <button><Link to="/login" className='registerLink'>Zaloguj się</Link></button>
                        <button>Załóż konto</button>
                    </form>
                </div>
            </section>
        )
    }

}

export default Register;