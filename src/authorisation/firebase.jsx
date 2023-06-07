import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
const db = getFirestore();
const auth = getAuth();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgOXCEMAy9UOaioCHeyDbzKbeE3HqOadw",
  authDomain: "bookshop-f619c.firebaseapp.com",
  projectId: "bookshop-f619c",
  storageBucket: "bookshop-f619c.appspot.com",
  messagingSenderId: "945165045307",
  appId: "1:945165045307:web:5dc5f7fb36e0ca183f561e",
  measurementId: "G-GN848GN6BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });
    return true
  } catch (error) {
    return {error: error.message}
  }
};


const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return true
  } catch (error) {
    return {error: error.message}
  }
};

const SignOut = async() => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    return false
  }
};


export {
  auth,
  signIn, 
  SignOut, 
  signUp,
};

export default app;