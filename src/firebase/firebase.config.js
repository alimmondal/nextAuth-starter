import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1k6aLCdWOYswhMrvt_dxMBHkXBdh_uw8",
  authDomain: "next-auth-1f22a.firebaseapp.com",
  projectId: "next-auth-1f22a",
  storageBucket: "next-auth-1f22a.appspot.com",
  messagingSenderId: "5270406888",
  appId: "1:5270406888:web:a39db7e5997f5844516b5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
