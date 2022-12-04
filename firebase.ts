import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDm0jZqvyzyqE2aFE8FZhVJed76omlGs04",
  authDomain: "auth.linkku.cc",
  projectId: "linkku-53a6e",
  storageBucket: "linkku-53a6e.appspot.com",
  messagingSenderId: "512379284067",
  appId: "1:512379284067:web:88a6f37d7dd387f79e2656",
  measurementId: "G-T8JPH7C7DV"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

const googleAuthProvider = new GoogleAuthProvider()

export { auth, db, googleAuthProvider }