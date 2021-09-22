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

