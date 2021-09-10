import React,{useState} from "react";
import Firebase from "./FirebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthData = () => {
    const [name,setName]=useState("");
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setName(user.displayName+"'s");
        }
    });
    
    return (<span>{name}</span>);
}

export default AuthData;