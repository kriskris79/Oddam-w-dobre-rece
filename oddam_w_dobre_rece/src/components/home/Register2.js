// import React, {useState, useEffect, useCallback} from 'react';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from "../../firebase";
import decoration from "../../assets/Decoration.svg";
import ReactDOM from "react-dom";
import { useState } from "react";
// import {Link} from "react-router-dom";

//

function App () {

    const [registerEmail, setRegisterEmail] = useState ("");
    const [registerPassword, setRegisterPassword] = useState ("");
    const [loginEmail, setLoginEmail] = useState ("");
    const [loginPassword, setLoginPassword] = useState ("");

    const register = async () => {

    }

    const login = async  () => {


    }

    const logout = async () => {

    }
}
const Register2 = ({ history}) => {
//     const handleRegister2 = useCallback(async event => {
//         event.preventDefault();
//         const { email, password } = event.target.elements;
//         try {
//             await app
//                 .auth()
//                 .createUserWithEmailAndPassword(email.value, password.value);
//             history.push("/");
//         } catch (error) {
//             alert(error);
//         }
//     }, [history]);
// const Register2 = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//
//     useEffect(() => {
//     }, [])
//
//     const addUser = (e) => {
//         e.preventDefault();
//         const auth = getAuth(app);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in
//                 const user = userCredential.user;
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // ..
//             });
//     }

    return (

        //dodać formularz z nasłuchem onSubmit na funkcję addUser
        //dwa inputy email password
        //guzik submit
        // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password dodać automatycne logowanie po rejestracji
        <div>

            <h1>Załóż konto</h1>
            <img src={decoration}></img>
            <form onSubmit={Register2}>
                <h1>Register</h1>




                <label> Email
                    <input type="email" name="email"   placeholder="email" onChenge={(event) => {setRegisterEmail(event.target.value);
                    }} />
                </label>
                <label>
                    Password

                    <input type="password" name="password" placeholder="Password" onChenge={(event) => {setRegisterPassword(event.target.value);
                    }} />/>
                </label>

                <button type="submit" >Załóż konto</button>



                < h1> Login</h1>
                <label> Email- login
                    <input type="email" name="email-login"   placeholder="email-login"  onChenge={(event) => {setLoginEmail(event.target.value);
                    }} />/>
                </label>
                <label>
                    Password- login

                    <input type="password" name="password-login" placeholder="Password-login" onChenge={(event) => {setLoginPassword(event.target.value);
                    }} />/>
                </label>

                <button type="submit" >Log in </button>



                <h4> User log in </h4>
                    <button>Sign Out </button>

            </form>
         </div>

    );
};

export default Register2;