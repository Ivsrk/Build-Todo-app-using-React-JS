
import firebase from "firebase";
const firebaseapp= firebase.initializeApp({
    apiKey: "AIzaSyCsgz6x2Kp36lD4BEriSUEfjVnkfbcI_ec",
    authDomain: "todo-app-itha.firebaseapp.com",
    databaseURL: "https://todo-app-itha.firebaseio.com",
    projectId: "todo-app-itha",
    storageBucket: "todo-app-itha.appspot.com",
    messagingSenderId: "1036053443949",
    appId: "1:1036053443949:web:c7da9ffcc19578498b5664",
    measurementId: "G-S5JTK5T2QT"
})
const db = firebaseapp.firestore();
export default db;