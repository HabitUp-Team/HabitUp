import firebase from "./FirebaseConfig";
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";

const firestore = firebase.firestore();

const gettingTodoList = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'Todo'));
    const todoList = await querySnapshot.docs.map((doc) => doc.data());

    return todoList
}

export default gettingTodoList;