import React from "react";
import Firebase from "./FirebaseConfig";
import { Button } from 'react-bootstrap';
import { getAuth, signOut, signInWithPopup,setPersistence,inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const auth = getAuth();
const Signup = () => {
    return (signInWithPopup(auth, provider));
}
const Signout = () => {
    signOut(auth);

}
setPersistence(auth, inMemoryPersistence)
    .then(() => {
        const provider = new GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        return signInWithPopup(auth, provider);
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    });




const Authentication = () => {

    return (
        <div>
            <Button onClick={Signup}>Sign Up</Button>
            <Button onClick={Signout}>Sign Out</Button>
        </div>
    );
}


export default Authentication;