import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth} from "../../firebase";

function Register2 () {
    const [registerEmail, setRegisterEmail] = useState ("");
    const [registerPassword, setRegisterPassword] = useState ("");
    const [loginEmail, setLoginEmail] = useState ("");
    const [loginPassword, setLoginPassword] = useState ("");
    const [user,setUser] = useState({});
    //
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });


    const register = async (e) => {
            e.preventDefault();
            createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            .then(use => console.log({user}))
            .catch(error => console.log(error))
    };

    const login = async  () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }

    };

    const logout = async () => {
        await signOut(auth);
    };
    console.log("test");
    return (
       <form onSubmit={register}>
            <h1>Załóż konto</h1>
                <h1>Register</h1>
                    <label> Email
                    <input
                        placeholder="email"
                        value={registerEmail}
                        onChange={(event) => {
                            setRegisterEmail(event.target.value)
                    }}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        placeholder="Password"
                        value={registerPassword}
                        onChange={(event) => {
                            setRegisterPassword(event.target.value)
                    }}
                />
                </label>
                <button>Załóż konto</button>

                {/*< h1> Login</h1>*/}
                {/*<label> Email- login*/}
                {/*    <input*/}
                {/*        type="email"*/}
                {/*        name="email-login"*/}
                {/*        placeholder="email-login"*/}
                {/*        value={loginEmail}*/}
                {/*        onChange={(event) => {setLoginEmail(event.target.value)}}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*<label>*/}
                {/*    Password- login*/}
                {/*    <input*/}
                {/*        type="password"*/}
                {/*        name="password-login"*/}
                {/*        placeholder="Password-login"*/}
                {/*        value={loginPassword}*/}
                {/*        onChange={(event) => {setLoginPassword(event.target.value)}}*/}
                {/*    />*/}
                {/*</label>*/}
                {/*<button onClick={login}> Log in </button>*/}
                {/*<h4> User log in </h4>*/}
                {/*{user?.email}*/}
                {/*<button onClick={logout}> Sign Out </button>*/}
         </form>
    );
};

export default Register2;