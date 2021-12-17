import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initFirebase;