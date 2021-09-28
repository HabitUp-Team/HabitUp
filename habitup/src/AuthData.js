import React, { useState } from "react";
// eslint-disable-next-line
import firebase from "./FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Username = () => {
    const [name, setName] = useState("");
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setName(user.displayName + "'s");
        }
    });

    return (<span>{name}</span>);
}


export const UserUid = () => {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            let uid = firebase.auth().currentUser.uid;
            console.log(uid);
            return { uid };
        }
    });

}

