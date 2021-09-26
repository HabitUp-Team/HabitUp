import firebase from "./FirebaseConfig";
import 'firebase/compat/firestore';
import { collection, getDocs ,addDoc} from "firebase/firestore";

const firestore = firebase.firestore();

export const gettingTodoList = async () => {
    const querySnapshot = await getDocs(collection(firestore, 'Todo'));
    const todoList = querySnapshot.docs.map((doc) => doc.data());

    return todoList
}

export const settingTodoList = async (e) =>{
          return firestore
          .collection('Todo')
          .doc()
          .set({todoTask:e.todoTask,impactSign:e.impactSign }, { merge: true });
      };
