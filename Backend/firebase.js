import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  // apiKey: "AIzaSyBW1PUWQtZhZmEx8DWGVJjAgwQhi3K1_Tw",
  // authDomain: "auth-demo-c1925.firebaseapp.com",
  // projectId: "auth-demo-c1925",
  // storageBucket: "auth-demo-c1925.appspot.com",
  // messagingSenderId: "746557330045",
  // appId: "1:746557330045:web:059113e6cc70c0bb8d1714"
    apiKey: "AIzaSyCrpeh5Kdrrb4UMuiHwi-aybYmWLMg5ohY",
    authDomain: "telegram-634cc.firebaseapp.com",
    projectId: "telegram-634cc",
    storageBucket: "telegram-634cc.appspot.com",
    messagingSenderId: "287725695627",
    appId: "1:287725695627:web:edb855827d54e785d5da8e",
    // measurementId: "G-QR3VV0LE1Y"
}).auth()