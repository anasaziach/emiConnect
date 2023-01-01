import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    // emiconnect
        apiKey: "AIzaSyCzCGoNq4J7WOdEugXxbmdPEQpfJpyl0UI",
        authDomain: "emiconnect-25617.firebaseapp.com",
        projectId: "emiconnect-25617",
        storageBucket: "emiconnect-25617.appspot.com",
        messagingSenderId: "33693941398",
        appId: "1:33693941398:web:b2e185e0d99c6269634cb7"
    // test
    // apiKey: "AIzaSyCguVrm27ji1vWsqfbNi90blbKcijWSihY",
    // authDomain: "test-c2be6.firebaseapp.com",
    // projectId: "test-c2be6",
    // storageBucket: "test-c2be6.appspot.com",
    // messagingSenderId: "439889731806",
    // appId: "1:439889731806:web:6ca46ca551fb3adc15224f"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)


export {app,storage}