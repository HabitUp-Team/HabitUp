import React, { useState } from "react";
// eslint-disable-next-line
import Firebase from "./FirebaseConfig";
import LoginLogout from "./components/LoginLogout";
import { getAuth, signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();


const auth = getAuth();
const Signup = () => {
    return (signInWithPopup(auth, provider));
}
const Signout = () => {
    signOut(auth).then(() => {
        console.log("Signed out successfully");
    }).catch((error) => {
        console.log(error);
    });


}
let name, email;
onAuthStateChanged(auth, (user) => {
    if (user) {
        name = user.displayName;
        email = user.email;
    }
});


const Authentication = () => {
    const [AuthState, setAuth] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    });

    return (
        <div>
            <LoginLogout name={name} email={AuthState?email:"Logged Out!"} state={AuthState ? Signout : Signup} buttonName={AuthState ? "SignOut" : "SignIn"} />
        </div>
    );
}


export default Authentication;