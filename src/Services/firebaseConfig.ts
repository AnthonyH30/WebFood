import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyBMXnxK2Nlk0HDG1DgOlWaXb0eD6DGKdBA",
  authDomain: "webfood-729b6.firebaseapp.com",
  projectId: "webfood-729b6",
  storageBucket: "webfood-729b6.appspot.com",
  messagingSenderId: "894947214128",
  appId: "1:894947214128:web:89c6444424967cf0823ef5",
  measurementId: "G-E79KJ8EV10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);