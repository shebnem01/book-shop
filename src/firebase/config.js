
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyCqP4_S8Y5poP6wu6DWcolh7gj79NJoe9o",
  authDomain: "shop-448d7.firebaseapp.com",
  projectId: "shop-448d7",
  storageBucket: "shop-448d7.appspot.com",
  messagingSenderId: "512970939640",
  appId: "1:512970939640:web:13d834bc0f142df393ef0d"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db=getFirestore(app);
export default app;