import firebase from "./FirebaseConfig";
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";
import { UserUid } from "./AuthData";

const firestore = firebase.firestore();

export const gettingTodoList = async () => {
    console.log(JSON.stringify({ UserUid }));
    const querySnapshot = await getDocs(collection(firestore, JSON.stringify({ UserUid })));
    const todoList = querySnapshot.docs.map((doc) => doc.data());

    return todoList
}

export const settingTodoList = async (e) => {
    return firestore
        .collection(JSON.stringify({ UserUid }))
        .doc()
        .set({ todoTask: e.todoTask, impactSign: e.impactSign }, { merge: true });
};
