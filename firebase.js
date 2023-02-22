// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV0YpSkJiTPtJkq8MgX7TtzjlQ9to6SKs",
  authDomain: "reels-next-yt-d418f.firebaseapp.com",
  projectId: "reels-next-yt-d418f",
  storageBucket: "reels-next-yt-d418f.appspot.com",
  messagingSenderId: "126506122185",
  appId: "1:126506122185:web:53a9e4347032e58163c618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const storage =getStorage()
export {auth,storage}
export default app;