import React, {useState, useEffect, useCallback} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";


const Register2 = ({ history}) => {
    const handleRegister2 = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);
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
                <input type="email" name="email"   placeholder="email"/>
            </label>
                <label>
                Password

                <input type="password" name="password" placeholder="Password"/>
                </label>

                <button type="submit" >Załóż konto</button>

            </form>
        </div>
    );
};

export default Register2;