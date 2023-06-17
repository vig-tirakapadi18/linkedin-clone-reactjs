import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBu5Bg1vSfNPl0k_FoHcE74Fgav_MG7Fn4",
    authDomain: "linkedin--netflix-clones.firebaseapp.com",
    projectId: "linkedin--netflix-clones",
    storageBucket: "linkedin--netflix-clones.appspot.com",
    messagingSenderId: "314839996882",
    appId: "1:314839996882:web:681f27fad88bb0d775100b"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db; 